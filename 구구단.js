
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale-1.0, maximum-scale=1.0, minimum-scale=1.0">
  <script src="https://unpkg.com/vue"></script>
</head>
<!-- component는 같은것만 렌터링 , 중복되는부분을 간단한 형태로  반복되게 하는 것
  props는 다른것을 렌더링, 반복되는것 중에 다르게 표현하고 싶은 데이터를 표출 -->
<body>
  <div id="app">
    <word-relay start-word="제로초"></word-relay>
    <word-relay start-word="초밥"></word-relay>
    <word-relay start-word="바보"></word-relay>
  </div>
</body>
</html>
<script>
Vue.component('wordRelay',{<!--전역컴포넌트-->
  template : `
  <div>
    <div>{{word}}</div><!--1-->
    <form v-on:submit="onSubmitForm">
      <input type ="text" v-model="value" ref="answer"><!--2-->
      <button type="submit">입력</button>
    </form>
    <div id="result">{{result}}</div><!--3-->
  </div>
  `,
  props:['startWord'],
  data(){<!--컴포넌트 할때는 데이터가 좀 달라진다, 인스턴스의 속성선언와 달리 함수형태로 선언한다.?? -->
  console.log(this);
    return{
    word:this.startWord,
    result:'',
    value:''
    };
  },
  methods:{
    onSubmitForm(e){
    e.preventDefault();
     if(this.word[this.word.length-1] === this.value[0]){
       this.result='정답';
       this.word = this.value;
       this.$refs.answer.focus();
     }else{
       this.result='땡';
       this.value='';
     }
    },
  }
})

</script>
<script>
new Vue({<!--vue 인스턴스-->
  el: '#app'
})
</script>
