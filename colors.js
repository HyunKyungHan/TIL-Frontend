function DaynightHandler(self){                   //head태그 안에 여러번 반복 사용할 코드를 함수로 만들어 정의한다.
    var target = document.querySelector('body');  //변수를 사용해 반복되는 코드를 간결하게 만들 수 있다.
    if(self.value === 'night'){
    target.style.backgroundColor = 'black';
    target.style.color = 'white';
    self.value = 'day'; 

    var alist = document.querySelectorAll('a');      //alist에 a tag안의 목록들을 담음
    var i = 0;
    while(i < alist.length){
        console.log(alist[i]);
        alist[i].style.color = 'yellow';         //night모드일 때 a tag값들의 색을 모두 다시 blue로 바꿈
        i = i + 1;
    }
}
    else{
        target.style.backgroundColor = 'white';
        target.style.color = 'black';
        self.value = 'night';

        var alist = document.querySelectorAll('a');      //alist에 a tag안의 목록들을 담음
        var i = 0;
        while(i < alist.length){
            console.log(alist[i]);
            alist[i].style.color = 'blue';         //night모드일 때 a tag값들의 색을 모두 다시 blue로 바꿈
            i = i + 1;
        } 
    }   
        }