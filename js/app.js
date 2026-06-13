document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('[data-portal]').forEach(a=>{a.href=HILLVIEW_CONFIG.portalUrl;});
  document.querySelectorAll('[data-student]').forEach(a=>{a.href=HILLVIEW_CONFIG.portalUrl+'?type=student';});
  document.querySelectorAll('[data-apartment]').forEach(a=>{a.href=HILLVIEW_CONFIG.portalUrl+'?type=apartment';});
  document.querySelectorAll('[data-admin]').forEach(a=>{a.href=HILLVIEW_CONFIG.portalUrl+'?page=admin';});
});
