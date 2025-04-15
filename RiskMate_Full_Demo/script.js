
function startDemo() {
  document.getElementById('demoContent').innerHTML = `
    <h2>Step 1: QR Code Sign-On</h2>
    <p>Simulating QR scan...<br><input placeholder='Enter your name' /><br><input placeholder='Company Name' /></p>
    <button onclick='inductionStep()'>Next</button>
  `;
}
function inductionStep() {
  document.getElementById('demoContent').innerHTML = `
    <h2>Step 2: Site Induction</h2>
    <ul>
      <li>Wear PPE at all times</li>
      <li>Know your emergency exits</li>
      <li>Respect restricted zones</li>
    </ul>
    <input type='checkbox'/> I acknowledge and accept<br>
    <button onclick='swmsStep()'>Next</button>
  `;
}
function swmsStep() {
  document.getElementById('demoContent').innerHTML = `
    <h2>Step 3: Select SWMS</h2>
    <select>
      <option>Electrical Works</option>
      <option>Solar Installation</option>
      <option>Confined Space</option>
    </select>
    <p>Add hazard: <input placeholder='e.g. working at heights'/></p>
    <button onclick='signoffStep()'>Next</button>
  `;
}
function signoffStep() {
  document.getElementById('demoContent').innerHTML = `
    <h2>Step 4: Sign Off</h2>
    <p>Worker: [Your Name]<br>Date: Today</p>
    <p>Status: <strong>Signed</strong> ✅</p>
    <button onclick='supervisorView()'>View Supervisor Panel</button>
  `;
}
function supervisorView() {
  document.getElementById('demoContent').innerHTML = `
    <h2>Step 5: Supervisor Dashboard</h2>
    <ul>
      <li>Workers Signed On: 3</li>
      <li>Active SWMS: 2</li>
    </ul>
    <button>Trigger Evacuation</button>
    <button>Send Site-Wide Update</button>
  `;
}
function learnMore() {
  alert('RiskMate is designed to make tradie safety instant, site-specific, and paper-free. Launching soon!');
}
