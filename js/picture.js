$(function(){
    var  sid = location.search.split("=")[1];
    load(sid);
})
//��̬��ȡ��ѯͼƬ
function load(sid){
    $.ajax({
        url: "http://127.0.0.1:3000/report/sd",//ָapp�µġ�report�� ָ·��report.js�µĽӿ� ��/asd��
        type: "get",
        data:{sid},
        dataType: "json",//�Զ�תJSON.parse()
        //��Ƭ������ҳ����ԭ��Ԫ���ڣ�
        success: function (data) {
            //console.log(data);
            // ��һ�ν�ȡ����
            var html = "";
            for(var item of data){
                //onclick="aa" data-id="item.id"
                html+=`<img class="my_img m-auto my_pp_f " src="${item.href}" alt=""/>`
            };
            //��ѯ
            var div = document.getElementById("pia");
            div.innerHTML = html;

        }
    })
}
