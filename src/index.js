console.log(123);
import './index.css'
import './index.html'
import $ from 'jquery'
import 'slick-carousel'
// $('.single-item').slick();
$(document).ready(function(){
  
$('.one-time').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});
});