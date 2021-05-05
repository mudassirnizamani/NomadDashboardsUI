
function userMainImgDropdown() {
    $('.user-avatar').click(function(){
        if( $(".user-avatar-dropdown").hasClass( "user-avatar-dropdown-open" ) ){
                $('.user-avatar-dropdown').removeClass("user-avatar-dropdown-open");
        }
        else {
                $('.user-avatar-dropdown').addClass("user-avatar-dropdown-open");
        }
      });
}