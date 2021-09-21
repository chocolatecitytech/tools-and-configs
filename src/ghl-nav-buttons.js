//keep in mind you should put this in a script tag like so:


//<script type="text/javascript">
//code goes here
//</script>

//put your locations is here ['location1','location2']
const adminLocations = ['', ''];

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', modifyGoHighLevel)
} else {
  modifyGoHighLevel()
}


function modifyGoHighLevel() {
  console.log("TopLeadsCRM. Brought to you by Chocolate City Tech");
  const parseLocations = location.href.split('/');
  if (!parseLocations || parseLocations.length == 0) return;

  const locationId = parseLocations[4];
  if (adminLocations.indexOf(locationId) > -1) return;

  hideNavElement('nav-online-listing');
  hideNavElement('nav-marketing');
  hideNavElement('nav-funnels-websites');
  hideNavElement('nav-triggers');
  hideNavElement('nav-dashboard');
}

function hideNavElement(elementId) {
  let intVal = setInterval(() => {
    let element = document.getElementById(elementId);
    //are these already hidden? wait for it to not be hidden
    if (!element || element.style.display === 'none') return;
    clearInterval(intVal);
    element.style.display = 'none';

  }, 150)
}
