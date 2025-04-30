
window.onload = function () {
  const upsIPs = [
    '192.168.1.10',
    '192.168.1.11',
    '192.168.1.12',
    '192.168.1.13',
    '192.168.1.14'
    
  ];

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
};

/*
function goToIP(ip) {
  window.open(`http://${ip}`, '_blank');
}
*/
