window.fbAsyncInit = function() {
    FB.init({
      appId      : '274154906799581',
      autoLogAppEvents : true,
      xfbml      : true,
      version    : 'v3.2'
    });
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
  };
  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
   function statusChangeCallback(response){
     if(response.status === 'connected'){
       console.log('Zalogowany');
       wyswietl(true);
       testAPI();
     } else {
       console.log('Niezalogowany');
       wyswietl(false);
     }
   }
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }
  function testAPI(){
    FB.login(function(response) {
      if (response.authResponse) {
       console.log('Elo! Pobieram info ... ');
       FB.api('/me?fields=email,id,first_name,last_name,picture,birthday,name', function(response){
        if(response && !response.error){
          console.log(response);
          wyswietl_dane(response);
        }
      });
    } else {
      console.log('User cancelled login or did not fully authorize.');
     }
    },{scope: 'email,pages_show_list'});
  }

  function wyswietl_dane(user){
    document.getElementById('naglowek').innerHTML = `Witaj, ${user.name}!`;
    let profil = `
      <ul class="list-group">
        <li class="list-group-item">Imię: ${user.first_name}</li>
        <li class="list-group-item">Nazwisko: ${user.last_name}</li>
        <li class="list-group-item">ID: ${user.id}</li>
        <li class="list-group-item">Email: ${user.email}</li>
        <li class="list-group-item">Data urodzenia: ${user.birthday}</li>
        <li class="list-group-item">Zdjęcie profilowe: <img src="${user.picture.data.url}"/></li>
      </ul>
    `;
    document.getElementById('profil').innerHTML = profil;
  }

  function wyswietl(czy_zalogowany){
    if(czy_zalogowany){ 
      document.getElementById('logout').style.display = 'block';
      document.getElementById('profil').style.display = 'block';
      document.getElementById('fb-btn').style.display = 'none';
    } else {  
      document.getElementById('logout').style.display = 'none';
      document.getElementById('profil').style.display = 'none';
      document.getElementById('fb-btn').style.display = 'block';
      document.getElementById('naglowek').innerHTML = `Nie jesteś zalogowany(a), zaloguj się!`;
    }
  }

  function wyloguj(){
    FB.logout(function(response){
      wyswietl(false);
    });
  }
