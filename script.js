const upsIPs = [
  '192.168.1.10',
  '192.168.1.11',
  '192.168.1.12',
  '192.168.1.13',
  // Devamını ekle...
];

// Butonları dinamik olarak oluştur
const container = document.getElementById('buttonContainer');

upsIPs.forEach((ip, index) => {
  const button = document.createElement('button');
  button.className = 'ip-button';
  button.textContent = `UPS ${index + 1}`;
  button.onclick = () => {
    window.open(`http://${ip}`, '_blank');
  };
  container.appendChild(button);
});

/*
function goToIP(ip) {
  window.open(`http://${ip}`, '_blank');
}
