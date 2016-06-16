var postsData = [
  {
    title: '宇鑫官网',
    url: 'http://sachagreif.com/introducing-telescope/'
  }, 
  {
    title: '快渔官网',
    url: 'http://meteor.com'
  }, 
  {
    title: '云商官网',
    url: 'http://themeteorbook.com'
  }, 
  {
    title: '微站官网',
    url: 'http://themeteorbook.com'
  }
];
Template.postsList.helpers({
  posts: function() {
    return Posts.find();
  }
});

Template.postItem.helpers({
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  }
});