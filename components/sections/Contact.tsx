"use client";

import React, { useState, useEffect, useRef } from "react";
import { copyToClipboard } from "@/lib/utils";
import { useToast } from "@/lib/hooks/useToast";

declare global {
  interface Window {
    hcaptcha?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey?: string;
          theme?: "light" | "dark";
          size?: "normal" | "compact";
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: (error: unknown) => void;
        }
      ) => string | number;
      reset: (widgetId?: string | number) => void;
      getResponse: (widgetId?: string | number) => string;
      remove: (widgetId?: string | number) => void;
    };
    onBreaxoCaptchaVerify?: (token: string) => void;
    onBreaxoCaptchaExpired?: () => void;
  }
}

interface FormDataState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
  captcha?: string;
}

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 100;
const MAX_SUBJECT_LENGTH = 150;
const MAX_MESSAGE_LENGTH = 3000;
const SUBMISSION_COOLDOWN_MS = 30000; // 30 seconds anti-flood cooldown

export function Contact() {
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();

  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [botcheck, setBotcheck] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [captchaToken, setCaptchaToken] = useState<string>("");
  const [captchaLoadingNotice, setCaptchaLoadingNotice] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const captchaContainerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | number | null>(null);

  const web3formsAccessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";
  const customHcaptchaSiteKey = process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY || "";

  // Email copy handler
  const handleCopy = async () => {
    const success = await copyToClipboard("breaxotech.contact@gmail.com");
    if (success) {
      setCopied(true);
      showToast("Email copied to clipboard!");
      setTimeout(() => setCopied(false), 3000);
    }
  };

  // Wire up hCaptcha global callbacks and load Web3Forms client script
  useEffect(() => {
    window.onBreaxoCaptchaVerify = (token: string) => {
      setCaptchaToken(token);
      setFieldErrors((prev) => ({ ...prev, captcha: undefined }));
    };

    window.onBreaxoCaptchaExpired = () => {
      setCaptchaToken("");
    };

    // Check if script already exists
    const scriptId = "web3forms-client-script";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://web3forms.com/client/script.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }

    // Set fallback notice if CAPTCHA takes too long or is blocked
    const timer = setTimeout(() => {
      if (!window.hcaptcha && captchaContainerRef.current && !captchaContainerRef.current.hasChildNodes()) {
        setCaptchaLoadingNotice(true);
      }
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // When form returns to idle (e.g. "Send Another Message"), reset the CAPTCHA widget
  const resetCaptchaWidget = () => {
    if (typeof window !== "undefined" && window.hcaptcha) {
      try {
        if (widgetIdRef.current !== null) {
          window.hcaptcha.reset(widgetIdRef.current);
        } else {
          window.hcaptcha.reset();
        }
      } catch {
        // Safe fallback if widget was not yet initialized
      }
    }
    setCaptchaToken("");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field-level error as user edits
    if (fieldErrors[name as keyof FieldErrors]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (generalError) {
      setGeneralError(null);
    }
  };

  const validateForm = (): boolean => {
    const errors: FieldErrors = {};
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    // 1. Name validation
    if (!trimmedName) {
      errors.name = "Please enter your name.";
    } else if (trimmedName.length < 2) {
      errors.name = "Name must be at least 2 characters.";
    } else if (trimmedName.length > MAX_NAME_LENGTH) {
      errors.name = `Name cannot exceed ${MAX_NAME_LENGTH} characters.`;
    }

    // 2. Email validation (RFC 5322 compatible pattern)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!trimmedEmail) {
      errors.email = "Please enter your email address.";
    } else if (!emailPattern.test(trimmedEmail)) {
      errors.email = "Please enter a valid email address (e.g., name@domain.com).";
    } else if (trimmedEmail.length > MAX_EMAIL_LENGTH) {
      errors.email = `Email cannot exceed ${MAX_EMAIL_LENGTH} characters.`;
    }

    // 3. Message validation
    if (!trimmedMessage) {
      errors.message = "Please describe your project or inquiry.";
    } else if (trimmedMessage.length < 10) {
      errors.message = "Message must be at least 10 characters long.";
    } else if (trimmedMessage.length > MAX_MESSAGE_LENGTH) {
      errors.message = `Message cannot exceed ${MAX_MESSAGE_LENGTH} characters.`;
    }

    // 4. CAPTCHA verification check
    // Query DOM input in case hCaptcha injected the textarea directly
    const hcaptchaInput = formRef.current?.querySelector<HTMLTextAreaElement | HTMLInputElement>(
      'textarea[name="h-captcha-response"], input[name="h-captcha-response"]'
    );
    const resolvedToken = captchaToken || hcaptchaInput?.value || (window.hcaptcha ? window.hcaptcha.getResponse() : "");

    if (!resolvedToken) {
      errors.captcha = "Please complete the CAPTCHA security check before sending.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prevent duplicate submissions while in progress
    if (isSubmitting) {
      return;
    }

    setGeneralError(null);

    // Validate fields and CAPTCHA completeness
    if (!validateForm()) {
      return;
    }

    // Honeypot check (botcheck must remain empty)
    if (botcheck) {
      // Silently discard automated bot submission without executing network call
      setIsSuccess(true);
      return;
    }

    // Anti-flood client cooldown check
    try {
      const lastSent = sessionStorage.getItem("breaxo_contact_last_ts");
      if (lastSent) {
        const elapsed = Date.now() - parseInt(lastSent, 10);
        if (elapsed < SUBMISSION_COOLDOWN_MS) {
          const waitSecs = Math.ceil((SUBMISSION_COOLDOWN_MS - elapsed) / 1000);
          setGeneralError(
            `Submission received recently. Please wait ${waitSecs} second${waitSecs === 1 ? "" : "s"} before sending another message.`
          );
          return;
        }
      }
    } catch {
      // Ignore sessionStorage exceptions in restricted environments
    }

    // If Web3Forms Access Key is not configured, explain clearly rather than silently submitting unprotected form
    if (!web3formsAccessKey) {
      setGeneralError(
        "Form submission is currently unconfigured. To enable form submissions, set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in your environment (.env.local / Cloudflare Worker variables) and ensure hCaptcha is activated in the Web3Forms dashboard."
      );
      return;
    }

    const hcaptchaInput = formRef.current?.querySelector<HTMLTextAreaElement | HTMLInputElement>(
      'textarea[name="h-captcha-response"], input[name="h-captcha-response"]'
    );
    const finalCaptchaToken =
      captchaToken || hcaptchaInput?.value || (window.hcaptcha ? window.hcaptcha.getResponse() : "");

    if (!finalCaptchaToken) {
      setFieldErrors((prev) => ({
        ...prev,
        captcha: "Please complete the CAPTCHA security verification before sending.",
      }));
      return;
    }

    setIsSubmitting(true);

    try {
      // AbortController timeout after 15 seconds to prevent hanging
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);

      const payload = {
        access_key: web3formsAccessKey,
        subject: formData.subject.trim() || "New Inquiry via Breaxo Tech Contact Form",
        from_name: "Breaxo Tech Platform",
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        botcheck: "",
        "h-captcha-response": finalCaptchaToken,
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const data = await response.json();

      if (response.ok && data.success) {
        // Record timestamp for anti-flood
        try {
          sessionStorage.setItem("breaxo_contact_last_ts", Date.now().toString());
        } catch {
          // ignore
        }

        setIsSuccess(true);
        showToast("Message sent successfully!");

        // Reset form data and CAPTCHA
        setFormData({ name: "", email: "", subject: "", message: "" });
        resetCaptchaWidget();
      } else {
        // Handle failure safely without exposing sensitive backend internals
        resetCaptchaWidget();

        const messageText = typeof data.message === "string" ? data.message.toLowerCase() : "";
        if (messageText.includes("captcha")) {
          setGeneralError(
            "CAPTCHA verification failed. Please complete the security check again and resubmit."
          );
        } else if (messageText.includes("access_key") || messageText.includes("key")) {
          setGeneralError(
            "Configuration error: The provided Web3Forms access key is invalid or inactive. Please verify settings in your Web3Forms dashboard."
          );
        } else {
          setGeneralError(
            "Unable to send your message at this time. Please try again later or contact us directly at breaxotech.contact@gmail.com."
          );
        }
      }
    } catch {
      // Network failure or timeout handling — safe user-facing message, no auto-retrying loop
      resetCaptchaWidget();
      setGeneralError(
        "A network connection error occurred while sending your message. Please check your connection or reach us directly at breaxotech.contact@gmail.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendAnother = () => {
    setIsSuccess(false);
    setGeneralError(null);
    setFieldErrors({});
    resetCaptchaWidget();
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-grid">
          {/* Left Column: Direct Info */}
          <div className="contact-info-pane reveal">
            <div className="section-kicker">
              <span className="status-live-dot"></span>
              <span>GET IN TOUCH</span>
            </div>
            <h2 className="section-heading">Contact Us</h2>
            <p className="contact-subheading">
              Have an engineering challenge or need an enterprise system built? Reach out directly via our secure form or email.
            </p>

            <div className="contact-meta-card glass-card reveal-scale">
              <div className="meta-item">
                <span className="meta-label">Direct Email</span>
                <div className="meta-email-wrap">
                  <a
                    href="mailto:breaxotech.contact@gmail.com"
                    className="meta-email font-mono"
                  >
                    breaxotech.contact@gmail.com
                  </a>
                  <button
                    type="button"
                    className="btn-copy"
                    id="copyEmailBtn"
                    title="Copy email address"
                    aria-label="Copy email address"
                    onClick={handleCopy}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    <span>{copied ? "Copied!" : "Copy"}</span>
                  </button>
                </div>
                <p className="meta-desc">
                  We review project briefs within one business day and respond with architectural scope and timeline expectations.
                </p>
              </div>
            </div>

            <div className="contact-quote-card">
              <p className="quote-text">“We give you better solutions.”</p>
              <p className="quote-author">— Breaxo Tech</p>
            </div>
          </div>

          {/* Right Column: Contact Form with CAPTCHA */}
          <div className="contact-form-pane reveal">
            {isSuccess ? (
              <div className="glass-card form-success-card" id="contactSuccessCard">
                <div className="success-icon-wrap" aria-hidden="true">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3>Thank You!</h3>
                <p className="success-subtext">
                  We have received your message and will reach out to you soon.
                </p>

                <div className="success-buttons">
                  <button
                    type="button"
                    className="btn btn-black btn-sm"
                    onClick={handleSendAnother}
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form
                ref={formRef}
                className="glass-card contact-form"
                id="contactForm"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="form-title-bar">
                  <h3>Send a Message</h3>
                  <p className="form-subtitle">
                    Send us a message and our team will get back to you shortly.
                  </p>
                </div>

                {/* Unconfigured Configuration Advisory Notice */}
                {!web3formsAccessKey && (
                  <div className="form-alert alert-warning" role="alert">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ flexShrink: 0, marginTop: "2px" }}
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    <div>
                      <strong>Setup Required:</strong> Web3Forms access key is not configured in this environment. Set{" "}
                      <code>NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY</code> in environment variables and enable hCaptcha on your Web3Forms dashboard before deploying.
                    </div>
                  </div>
                )}

                {/* General Error Banner */}
                {generalError && (
                  <div className="form-alert alert-error" role="alert" id="contactFormGeneralError">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ flexShrink: 0, marginTop: "2px" }}
                    >
                      <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    <div>{generalError}</div>
                  </div>
                )}

                {/* Hidden Honeypot Field for Automated Bot Prevention */}
                <input
                  type="checkbox"
                  name="botcheck"
                  id="contactBotcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ display: "none" }}
                  checked={botcheck}
                  onChange={(e) => setBotcheck(e.target.checked)}
                />

                <div className="form-row-two">
                  {/* Name field */}
                  <div className={`form-field ${fieldErrors.name ? "has-error" : ""}`}>
                    <label htmlFor="contactName" className="field-label">
                      Your Name <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="name"
                      className="field-input"
                      placeholder="Jane Doe"
                      maxLength={MAX_NAME_LENGTH}
                      value={formData.name}
                      onChange={handleInputChange}
                      autoComplete="name"
                      required
                      disabled={isSubmitting}
                    />
                    {fieldErrors.name && (
                      <span className="error-msg" id="contactNameError">
                        {fieldErrors.name}
                      </span>
                    )}
                  </div>

                  {/* Email field */}
                  <div className={`form-field ${fieldErrors.email ? "has-error" : ""}`}>
                    <label htmlFor="contactEmail" className="field-label">
                      Email Address <span className="req">*</span>
                    </label>
                    <input
                      type="email"
                      id="contactEmail"
                      name="email"
                      className="field-input"
                      placeholder="jane@company.com"
                      maxLength={MAX_EMAIL_LENGTH}
                      value={formData.email}
                      onChange={handleInputChange}
                      autoComplete="email"
                      required
                      disabled={isSubmitting}
                    />
                    {fieldErrors.email && (
                      <span className="error-msg" id="contactEmailError">
                        {fieldErrors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div className="form-field">
                  <label htmlFor="contactSubject" className="field-label">
                    Subject <span className="opt">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="contactSubject"
                    name="subject"
                    className="field-input"
                    placeholder="Project Inquiry / Platform Architecture"
                    maxLength={MAX_SUBJECT_LENGTH}
                    value={formData.subject}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  />
                </div>

                {/* Message field */}
                <div className={`form-field ${fieldErrors.message ? "has-error" : ""}`}>
                  <div className="field-header">
                    <label htmlFor="contactMessage" className="field-label">
                      Project Brief or Message <span className="req">*</span>
                    </label>
                    <span className="char-count">
                      {formData.message.length} / {MAX_MESSAGE_LENGTH}
                    </span>
                  </div>
                  <textarea
                    id="contactMessage"
                    name="message"
                    className="field-textarea"
                    placeholder="Tell us about your technical requirements, goals, or timeline..."
                    rows={4}
                    maxLength={MAX_MESSAGE_LENGTH}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                  />
                  {fieldErrors.message && (
                    <span className="error-msg" id="contactMessageError">
                      {fieldErrors.message}
                    </span>
                  )}
                </div>

                {/* CAPTCHA clearly displayed before the Send Message button */}
                <div
                  className={`form-field captcha-container ${
                    fieldErrors.captcha ? "has-error" : ""
                  }`}
                  id="captchaSection"
                >
                  <label className="field-label">
                    Security Verification <span className="req">*</span>
                  </label>

                  <div className="captcha-wrap">
                    <div
                      ref={captchaContainerRef}
                      id="hcaptcha-widget"
                      className="h-captcha"
                      data-captcha="true"
                      data-sitekey={customHcaptchaSiteKey || undefined}
                      data-theme="light"
                      data-callback="onBreaxoCaptchaVerify"
                      data-expired-callback="onBreaxoCaptchaExpired"
                    />
                  </div>

                  {fieldErrors.captcha && (
                    <span className="error-msg" id="captchaErrorMsg" style={{ display: "block" }}>
                      {fieldErrors.captcha}
                    </span>
                  )}

                  {captchaLoadingNotice && (
                    <span
                      style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "4px" }}
                    >
                      If verification fails to appear, please ensure script blockers are disabled or reach out directly at breaxotech.contact@gmail.com.
                    </span>
                  )}
                </div>

                {/* Send Message Submit Button */}
                <div className="form-submit-row">
                  <button
                    type="submit"
                    id="contactSubmitBtn"
                    className="btn btn-black btn-lg btn-block"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                        <span className="btn-spinner" aria-hidden="true" />
                        <span>Sending...</span>
                      </span>
                    ) : (
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                        <span>Send Message</span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="22" y1="2" x2="11" y2="13" />
                          <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                      </span>
                    )}
                  </button>
                </div>

                <p className="form-footnote">
                  Protected by Web3Forms &amp; hCaptcha. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
