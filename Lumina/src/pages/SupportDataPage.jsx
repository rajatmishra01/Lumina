import React from "react";
import "./SupportDataPage.css";

export default function SupportDataPage() {
  return (
    <div className="support-page">
      <h2 className="page-title">Support & Data</h2>
      <p className="page-subtitle">
        Get help, contact support, and manage your data requests
      </p>

      <div className="support-grid">
        {/* LEFT COLUMN */}
        <div className="left-column">
          {/* CONTACT SUPPORT */}
          <div className="card">
            <h3 className="card-title">Contact Support</h3>

            <input
              type="text"
              className="input"
              placeholder="Subject"
            />

            <textarea
              className="textarea"
              placeholder="Describe Your Problem....."
            />

            <input
              type="text"
              className="input"
              placeholder="Attachments (Optional)"
            />

            <button className="send-btn">Send Massage</button>
          </div>

          {/* FAQ */}
          <div className="card">
            <h3 className="card-title">FAQ</h3>

            <div className="faq-item">
              <span>How do I reschedule appointment?</span>
              <span className="read-link">Read</span>
            </div>

            <div className="faq-item">
              <span>How is my data secured?</span>
              <span className="read-link">Read</span>
            </div>

            <div className="faq-item">
              <span>Billing questions</span>
              <span className="read-link">Read</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="right-column">
          {/* TICKETS */}
          <div className="card">
            <h3 className="card-title">Tickets</h3>

            <div className="ticket-item">
              <span>Payment done but my plan.........</span>
              <small>1d ago</small>
            </div>

            <div className="ticket-item">
              <span>I am facing a problem while.........</span>
              <small>30d ago</small>
            </div>

            <div className="ticket-item">
              <span>I didn't receive any email.........</span>
              <small>6m ago</small>
            </div>
          </div>

          {/* DATA REQUESTS */}
          <div className="card">
            <h3 className="card-title">Data Requests</h3>

            <div className="data-item">
              <span>Export medical records</span>
              <button className="tag-btn">Requests</button>
            </div>

            <div className="data-item">
              <span>Request Billing Invoice</span>
              <button className="tag-btn">Requests</button>
            </div>

            <div className="data-item">
              <span>Backup Your account</span>
              <button className="tag-btn">Breakup</button>
            </div>
          </div>

          {/* CONTACT INFO */}
          <div className="contact-info">
            <p className="support-email">Support@Lumina.com</p>
            <p className="support-phone">1800-1800-1000-123</p>
          </div>
        </div>
      </div>
    </div>
  );
}
