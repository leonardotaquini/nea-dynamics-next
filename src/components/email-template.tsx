import * as React from "react";

export interface EmailTemplateProps {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name, phone, email, message }) => (
  <div style={{ fontFamily: "Arial, sans-serif", color: "#333", lineHeight: "1.5", maxWidth: "600px", margin: "auto", border: "1px solid #ddd", padding: "20px", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
  <div style={{ borderBottom: "2px solid #048CE2", marginBottom: "20px", paddingBottom: "10px" }}>
    <h1 style={{ fontSize: "24px", color: "#003667", margin: "0" }}>
      Hola, mi nombre es <span style={{ color: "#048CE2" }}>{name}</span>
    </h1>
  </div>
  <div>
    <p style={{ fontSize: "16px", color: "#666", margin: "10px 0" }}>{message}</p>
  </div>
  <footer style={{ borderTop: "2px solid #048CE2", marginTop: "20px", paddingTop: "10px", textAlign: "center" }}>
    <p style={{ fontSize: "14px", color: "#666", margin: "0" }}>
      Me pueden contactar a través de <a href={`mailto:${email}`} style={{ color: "#048CE2", textDecoration: "none" }}>{email}</a> o a mi número telefónico: <a href={`tel:${phone}`} style={{ color: "#048CE2", textDecoration: "none" }}>{phone}</a>
    </p>
  </footer>
</div>

);
