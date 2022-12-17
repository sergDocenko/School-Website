const footer=document.createElement("footer");

footer.innerHTML=`<div class="footer_container container">
<div class="footer_info">
  <h4>LoGo</h4>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam labore voluptas nam officiis nihil.</p>
</div>
<div class="footer_links">
  <h4>Permalinks</h4>
  <ul class="links">
    <li>
      <a  href="index.html">Home</a>
    </li>
    <li>
      <a href="about.html">About</a>
    </li>
    <li>
      <a href="courses.html">Courses</a>
    </li>
    <li>
      <a href="contact.html">Contact</a>
    </li>
  </ul>
</div>
<div class="footer_primacy">
  <h4>Primacy</h4>
  <ul class="links">
    <li>
      <a href="#"> Privacy Policy</a>
    </li>
    <li>
      <a href="#"> Terms and Conditions</a>
    </li>
    <li>
      <a href="#"> Refund Policy</a>
    </li>
  </ul>
</div>
<div class="footer_contacts">
  <h4>Contact Us</h4>
  <ul class="contacts">
    <li>+01 234 567 8910</li>
    <li>Shakir@gmail.com</li>
  </ul>
  <ul class="social_links">
    <li>
      <a href="#">
        <i class="uil uil-facebook-f"></i>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="uil uil-twitter"></i>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="uil uil-instagram-alt"></i>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="uil uil-linkedin"></i>
      </a>
    </li>
  </ul>
</div>

</div>
<div class="footer_copyright">
  <small> Copyright &copy; SERGIO by trainee</small>
</div>`;
footer.classList.add("footer");

document.body.append(footer);