// Current May 2027 Australia and New Zealand registration guidance.
(() => {
  const directory = document.querySelector('.directory');
  if (!directory) return;
  directory.insertAdjacentHTML('beforebegin', `<section class="anz-update" id="anz-2027">
    <p class="eyebrow">Australia &amp; New Zealand · May 2027</p>
    <h2>ANZ test-centre update</h2>
    <p class="muted">Check the available AP subjects and the provider's current terms before registering.</p>
    <div class="anz-grid">
      <article class="anz-card"><span class="anz-region">Australia · Sydney</span><h3>The King's School</h3>
        <p>Offers selected AP exams, not the full range. <strong>AUD 650 per exam</strong> plus applicable booking surcharges. Buy a ticket by <strong>7 February 2027</strong>.</p>
        <a href="https://events.humanitix.com/2027-advanced-placement-ap-exams-at-the-king-s-school" target="_blank" rel="noopener noreferrer">See exams and buy a ticket ↗</a></article>
      <article class="anz-card anz-pending"><span class="anz-region">Australia · Gold Coast</span><h3>Test centre confirmed; details pending</h3>
        <p>The venue and registration instructions have not yet been announced. Registration has usually remained open until March, but <strong>no 2027 deadline is confirmed</strong>. Do not assume this is the separately listed Southport School.</p></article>
      <article class="anz-card"><span class="anz-region">New Zealand · Auckland</span><h3>Wentworth Computer Science College</h3>
        <p>Complete the <a href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=81fDNhEZREyyksK1cT_Eb3ShSCtxK2dAtohgEWfNhXdURVRWNk03SUZTUVkzV0syNVgzQ1oyM0ZZRi4u" target="_blank" rel="noopener noreferrer">registration form</a>. Parent and student must sign the <a href="https://drive.google.com/file/d/1yS3ZkVG0csuEVdJKEA7djgv--o5USV-U/view" target="_blank" rel="noopener noreferrer">terms PDF</a>; email it with a passport copy to <a href="mailto:ktanaka@wentworth.school.nz">the coordinator</a> by <strong>6 November 2026</strong>. Listed fee: <strong>NZD 600 per subject</strong>; confirm subjects and payment directly.</p></article>
      <article class="anz-card"><span class="anz-region">New Zealand · Christchurch</span><h3>Christ's College</h3>
        <p>For students enrolled in a New Zealand secondary school or New Zealand citizens. <strong>NZD 430 per exam</strong> by <strong>14 November 2026</strong>; <strong>NZD 495</strong> after that, with late entries closing <strong>1 March 2027</strong>. Complete the school form first; staff then send the College Board link.</p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfkumtoKjKwyXHf9jTBhdcoLKzk4oGg_UcHy6aiASq9cEVSaw/viewform" target="_blank" rel="noopener noreferrer">Christ's College registration form ↗</a></article>
    </div>
  </section>`);
  document.head.insertAdjacentHTML('beforeend', `<style>
    .anz-update{margin:44px 0 0;padding:28px;border-radius:16px;background:#f4f7ff;border:1px solid #cfdaef;border-top:5px solid #172B70}
    .anz-update h2{margin:6px 0 10px}.anz-update>.muted{margin:0 0 18px}
    .anz-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
    .anz-card{background:#fff;border:1px solid #d9e1f0;border-radius:12px;padding:18px}
    .anz-card h3{margin:5px 0 10px;font-size:18px;line-height:1.25}
    .anz-card p{font-size:14px;margin:0 0 12px}.anz-card a{color:#172B70;font-weight:bold}
    .anz-region{font-size:11px;font-weight:bold;color:#2947A3;text-transform:uppercase;letter-spacing:.06em}
    .anz-pending{background:#fff9ed;border-color:#ead8b0}
    @media(max-width:700px){.anz-grid{grid-template-columns:1fr}}
    @media(max-width:480px){.anz-update{padding:18px}}
  </style>`);
})();
