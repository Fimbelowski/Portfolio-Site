var vm;window.onload=function(){vm=new Vue({el:"#projects",data:{isModalActive:!1,activeModalContent:{title:""},projectPreviews:[{title:"",subtitle:"",gallery:["",""],desc:"",uri:""},{title:"What's WR?",subtitle:"Find a random speedrun world record to watch!",gallery:["dist/images/projects/whats-wr/gallery-1.png","dist/images/projects/whats-wr/gallery-2.png"],desc:['"What\'s WR" is a site that will find a random speedrun world record video for the user to watch. Speedruns are the act of completing a video game as fast as possible within the rules and regulations set by the speedrunning community for that particular game. This helps users find obscure games or runners they would have otherwise never known about, while also providing entertainment via a world record video.',"\"What's WR\" works mainly through consuming Speedrun.com's API. The site must first find out how many games are currently supported on Speedrun.com and then fetches a random few games from the site as a starting point. The site then picks a random game from the set and starts reviewing the game's different categories. A category will have to pass a set of criteria before being deemed fit to show to the user.","After a game and category are deemed fit for viewing, the site makes a few more calls to the API concurrently to retrieve auxiliary information such as information about the game and category, information about the runner(s), and also links to the runner(s) social media accounts."],uri:"https://fimbelowski.github.io/Whats-WR/"}]},methods:{activateModal:function(e){this.isModalActive=!0,this.setActiveModalContent(e)},deactivateModal:function(e){"modal-exit-button"!==e.target.id&&"modal"!==e.target.id||(this.isModalActive=!1,this.activeModalContent=this.projectPreviews[0])},setActiveModalContent:function(e){this.activeModalContent=this.projectPreviews[e]}},created:function(){this.setActiveModalContent(0)}})};