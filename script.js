window.onload = function () {
 
  const upsIPs = [
    '192.168.1.25',
    '192.168.2.10',
    '10.0.0.5',
    '172.16.4.7',
    '192.168.100.15',
    '192.168.50.3',
   
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
