const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //

  const div = document.createElement('div');
  const sp1 = document.createElement('span');
  const sp2 = document.createElement('span');
  const h1 = document.createElement('h1');

  div.classList.add("header");
  sp1.classList.add("date");
  sp2.classList.add("temp");

  div.append(sp1);
  div.append(h1);
  div.append(sp2);

  sp1.textContent = `${tarih}`;
  sp2.textContent = `${yazi}`;
  h1.textContent = `${baslik}`;

  return div;
};


const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //

  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper")) 
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))

  document.querySelector(secici).append(Header("baslik", "10/10/10", "Lorem Ipsum"));
 
}

export { Header, headerEkleyici }
