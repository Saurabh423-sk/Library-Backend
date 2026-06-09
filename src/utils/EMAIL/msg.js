export const signup_msg = (link) => {
  return `
   <div style="
  font-family: Arial;
  padding: 20px;
  background-image: url('https://i.pinimg.com/1200x/38/73/a6/3873a6ed6a7a305a78396ce89215c92c.jpg');
  background-size: cover;
  background-position: center;
  color: #fff;
">
  <div style="background: rgba(0,0,0,0.6); padding: 20px; border-radius: 10px;">
    
    <h2>Welcome to the BRABU Library 📚</h2>
    
    <p>Dear Student,</p>
    
    <p>Your account has been successfully created.</p>

    <p><strong>Click the button below to verify your email:</strong></p>

    <!-- 🔥 VERIFY BUTTON -->
    <a href="${link}" 
       style="display:inline-block; padding:12px 20px; background:#3498db; color:white; text-decoration:none; border-radius:6px; font-weight:bold; margin-top:10px;">
       ✅ Verify Email
    </a>

    <!-- 🔗 fallback -->
    <p style="margin-top: 15px; font-size: 12px; color: #ddd;">
      If the button doesn't work, copy and paste this link:<br/>
      ${link}
    </p>

    <br/>

    <p>After verification, please visit the library for approval by the librarian.</p>

    <br/>
    <p>Thank you!</p>
    <p><strong>BRABU Library Management System</strong></p>

  </div>
</div>
`
};


export const studentActivated_msg =` <div style="font-family: Arial, sans-serif; background: #f4f6f8; padding: 20px;">
  
  <div style="max-width: 500px; margin: auto; background: #ffffff; border-radius: 10px; padding: 20px; text-align: center;">
    
    <h2 style="color: #2ecc71;">🎉 Congratulations!</h2>
    
    <h3>Welcome to BRABU Library 📚</h3>
    
    <p>Dear Student,</p>
    
    <p>Your account has been <strong style="color: green;">successfully approved</strong> by the librarian.</p>
    
    <p>You can now access all library features, including:</p>
    
    <ul style="text-align: left; margin: 10px 0;">
      <li>📖 Borrow books</li>
      <li>🚪 Entry/Exit system</li>
      <li>🔍 View book details</li>
    </ul>
    
    <p style="margin-top: 15px;">Click the button below to access your account:</p>

    <!-- 🔥 Button -->
    <a href="https://brabu-library123.netlify.app/" 
       style="display:inline-block; padding:12px 20px; background:#2ecc71; color:white; text-decoration:none; border-radius:6px; font-weight:bold; margin-top:10px;">
       🚀 Go to Library
    </a>

    <!-- 🔗 Fallback link -->
    <p style="margin-top: 15px; font-size: 12px; color: gray;">
      If the button doesn't work, copy and paste this link into your browser:<br/>
      https://brabu-library123.netlify.app/
    </p>
    
    <br/>
    
    <p>Thank you,</p>
    <p><strong>BRABU Library Management System</strong></p>
  
  </div>

</div>`