<script type="text/javascript">
	// Animate the Label
// ****************************************

jQuery(function() {
  jQuery("body").on("input propertychange", ".floating-label-form-group", function(e) {
    jQuery(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
  }).on("focus", ".floating-label-form-group", function() {
    jQuery(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function() {
    jQuery(this).removeClass("floating-label-form-group-with-focus");
  });
});

// Add .is-send class
// ****************************************

jQuery('.contact-send').click(function(){
  jQuery(this).parents('.form-wrapper').addClass('is-sent');
	
	setTimeout(function(){
    jQuery('.form-wrapper').removeClass('is-sent');
  }, 3600);
	
});
</script>
