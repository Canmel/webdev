$(window).load( function() {
  $('#mycalendar').monthly({
    mode: 'event',
  });
  $('#mycalendar2').monthly({
    mode: 'picker',
    target: '#mytarget',
    setWidth: '250px',
    startHidden: true,
    showTrigger: '#mytarget',
    stylePast: true,
    disablePast: true
  });
});
