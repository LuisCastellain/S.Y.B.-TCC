// Lembrar-me: salva/recupera email do usuário via cookies
window.addEventListener('DOMContentLoaded', function() {
  const emailInput = document.getElementById('loginEmail');
  const rememberMe = document.getElementById('rememberMe');

  // Recupera email salvo
  const savedEmail = getCookie('syb_login_email');
  if (savedEmail) {
    emailInput.value = savedEmail;
    rememberMe.checked = true;
  }

  document.getElementById('loginForm').addEventListener('submit', function(e) {
    if (rememberMe.checked) {
      setCookie('syb_login_email', emailInput.value, 30);
    } else {
      setCookie('syb_login_email', '', -1); // apaga
    }
  });
});

function setCookie(name, value, days) {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '')  + expires + '; path=/';
}
function getCookie(name) {
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for(let i=0;i < ca.length;i++) {
    let c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}
