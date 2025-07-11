function login(){
  const u=document.getElementById('user').value, p=document.getElementById('pass').value;
  if(u==='pixlineoficial'&&p==='visual2025⭐'){
    document.getElementById('login').style.display='none';
    document.getElementById('feed').style.display='block';
  } else document.getElementById('error').innerText='Usuario o contraseña incorrectos.';
}
