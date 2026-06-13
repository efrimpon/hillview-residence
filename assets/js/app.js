const PORTAL_URL = 'https://script.google.com/macros/s/AKfycbzkxoAzushYrDrrcYF8Lr6g3XFR8_5K3DQ_9w8S8syxMFbZKiaD5f1ywVjWcnjeAPbSTQ/exec';
function openPortal(type){
  const suffix = type ? ('?type=' + encodeURIComponent(type)) : '';
  window.location.href = PORTAL_URL + suffix;
}
function setPortalLinks(){
  document.querySelectorAll('[data-portal]').forEach(el=>{
    el.addEventListener('click', e=>{ e.preventDefault(); openPortal(el.getAttribute('data-portal')); });
  });
}
document.addEventListener('DOMContentLoaded', setPortalLinks);
