import React, { useState } from "react";
import "./PaymentActivityPage.css";

export default function PaymentsActivity() {
  // FIXED: Corrected the useState syntax here
  const [primaryUPI, setPrimaryUPI] = useState(0);
  const [primaryCard, setPrimaryCard] = useState(0);

  return (
    <div className="payment-page-container">
      
      

      {/* ---- Main Content Card (NEW WRAPPER) ---- */}
      <div className="main-content-card">
        <h2 className="title">Payments & Activity</h2>
        <p className="subtitle">Manage Payment methods And Recent Activity</p>

        {/* ------- UPI Section -------- */}
        <div className="section">
          <h3 className="section-title">Manage Saved UPI</h3>

          {["Example@oksbi", "Example @Paytm", "Example@okhdfcbank"].map(
            (upi, idx) => (
              <div className="row-box" key={idx}>
                {/* FIXED: Changed from <input> to <span> to match image */}
                <span className="upi-id">{upi}</span>

                <div className="primary-area">
                  <input
                    type="radio"
                    id={`upi-${idx}`}
                    name="primary-upi" // Added name for proper radio button behavior
                    checked={primaryUPI === idx}
                    onChange={() => setPrimaryUPI(idx)}
                  />
                  <label htmlFor={`upi-${idx}`}>Primary</label>
                </div>

                <button className="remove-btn">Remove</button>
              </div>
            )
          )}
        </div>

        {/* ------- Cards Section -------- */}
        <div className="section">
          <h3 className="section-title">Manage Saved Cards</h3>

          {[
            { number: "8475 5227 4848 6519", logo: "RuPay" },
            { number: "4548 XXXX XXXX 54768", logo: "VISA" },
            { number: "8475 XXXX XXXX 6519", logo: "Mastercard" },
          ].map((card, idx) => (
            <div className="row-box" key={idx}>
              <span className="card-number">{card.number}</span>

              <span className={`card-logo ${card.logo.toLowerCase()}`}>
                {card.logo === "Mastercard" ? "" : card.logo}
              </span>

              <div className="primary-area">
                <input
                  type="radio"
                  id={`card-${idx}`}
                  name="primary-card" // Added name for proper radio button behavior
                  checked={primaryCard === idx}
                  onChange={() => setPrimaryCard(idx)}
                />
                <label htmlFor={`card-${idx}`}>Primary</label>
              </div>

              <button className="remove-btn">Remove</button>
            </div>
          ))}
        </div>

        {/* ------- Activity + Plan Grid ------- */}
        <div className="bottom-grid">
          {/* Recent Activity */}
          <div className="activity-box">
            <h3>Recent Activity</h3>
            <ul>
              {/* FIXED: Changed structure for flexbox alignment */}
              <li>
                <p>Language set to English (IND)</p> <span>4d ago</span>
              </li>
              <li>
                <p>Password Change</p> <span>6d ago</span>
              </li>
              <li>
                <p>New Family Member Added</p> <span>10d ago</span>
              </li>
              <li>
                <p>Push Notifications</p> <span>12d ago</span>
              </li>
            </ul>
          </div>

          {/* Current Plan */}
          <div className="plan-box">
            <h3>Current Plan</h3>
            <h4 className="plan-name">
              Pro <span className="price">(₹ 779)</span>
            </h4>
            <p className="plan-details">
              Protect your family with our Health Plan covering up to 5 members.
              Enjoy medical coverage, cashless hospitalization, and full
              flexibility.
            </p>

            <a href="#" className="tnc">
              T&Cs apply
            </a>

            <button className="change-btn">Change Plan</button>
          </div>
        </div>
      </div>
    </div>
  );
}