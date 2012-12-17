jQuery(document).ready(function(){
     jQuery(".like img, .unlike img").click(function(){
          var task = jQuery(this).attr("rel");
          var post_id = jQuery(this).attr("id");
          
          if(task == "like")
          {
               post_id = post_id.replace("like-", "");
          }
          else
          {
               post_id = post_id.replace("unlike-", "");
          }
          
          //jQuery("#status-" + post_id).html("&nbsp;&nbsp;").addClass("loading-img");
          
          jQuery.ajax({
               type: "POST",
               url: blog_url + "/wp-content/plugins/wti-like-post/wti_like.php",
               data: "post_id=" + post_id + "&task=" + task + "&num=" + Math.random(),
               success: function(data){
                    jQuery("#status-" + post_id).fadeIn();
                    jQuery("#lc-" + post_id).html(data.like);
                    jQuery("#unlc-" + post_id).html(data.unlike);
                    jQuery("#status-" + post_id).empty().html(data.msg);
                    setTimeout(function(){
                         jQuery("#status-" + post_id).fadeOut();
                    },2000); 
               },
               dataType: "json"
          });
     });
});
function link_post(){
          jQuery(".like img, .unlike img").unbind("click");
          jQuery(".like img, .unlike img").click(function(){
          var task = jQuery(this).attr("rel");
          var post_id = jQuery(this).attr("id");
          
          if(task == "like")
          {
               post_id = post_id.replace("like-", "");
          }
          else
          {
               post_id = post_id.replace("unlike-", "");
          }
          
          //jQuery("#status-" + post_id).html("&nbsp;&nbsp;").addClass("loading-img");
          
          jQuery.ajax({
               type: "POST",
               url: blog_url + "/wp-content/plugins/wti-like-post/wti_like.php",
               data: "post_id=" + post_id + "&task=" + task + "&num=" + Math.random(),
               success: function(data){
                    jQuery("#status-" + post_id).fadeIn();
                    jQuery("#lc-" + post_id).html(data.like);
                    jQuery("#unlc-" + post_id).html(data.unlike);
                    jQuery("#status-" + post_id).empty().html(data.msg);
                    setTimeout(function(){
                         jQuery("#status-" + post_id).fadeOut();
                    },2000); 
               },
               dataType: "json"
          });
     });
}