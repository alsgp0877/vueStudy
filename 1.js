
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale-1.0, maximum-scale=1.0, minimum-scale=1.0">
  <script src="https://unpkg.com/vue"></script>
</head>
<body>
  <!--0313~14-->
  <!-- vue는 어떻게 데이터가 흘러가느냐가 제일 중요 -->
  <!--v-model: input이랑 vue를 연결,양방향 바인딩-->
  <!--v-on: 이벤트 리스너의 역할-->

  <!--전체적으로 쓸 태그(레이아웃)을 지정하고 바뀔 데이터중심으로 설정-->
  <!--모든 화면을 만들어놓고 데이터만 넣어서 바꾼다 -->


  <div id="app">
    <div>{{word}}</div><!--1-->
    <form v-on:submit="onSubmitForm">
      <input type ="text" v-model="value" ref="answer"><!--2-->
      <button type="submit">입력</button>
    </form>
    <div id="result">{{result}}</div><!--3-->
  </div>
</body>
</html>

<script>
new Vue({
  el: '#app',
  data:{
  	word:'제로초',
    result:'',
    value:''
  },
  methods:{
  	onSubmitForm(e){
    e.preventDefault();<!-- form은 리로드 되면서 데이터가 없어지기 때문에 고정-->
     if(this.word[this.word.length-1] === this.value[0]){
     	 this.result='정답';
       this.word = this.value;
       this.$refs.answer.focus();
     }else{
     	 this.result='땡';
       this.value='';
     }
    },
  },
})
</script>
