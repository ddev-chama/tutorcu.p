var geocoder; // ��˹����������Ѻ �� Geocoder Object ���ŧ����ʶҹ����繾ԡѴ
var map; // ��˹������ map ����ҹ�͡�ѧ��ѹ �����������ö���¡��ҹ �ҡ��ǹ�����
var my_Marker; // ��˹����������Ѻ�纵�� marker
var GGM; // ��˹������ GGM ����� google.maps Object �������¡��ҹ����¢��
function initialize() { // �ѧ��ѹ�ʴ�Ἱ���
	GGM=new Object(google.maps); // �纵���� google.maps Object ���㹵���� GGM
	geocoder = new GGM.Geocoder(); // �纵���� google.maps.Geocoder Object
	// ��˹��ش������鹢ͧἹ���
	var my_Latlng  = new GGM.LatLng(13.761728449950002,100.6527900695800);
	var my_mapTypeId=GGM.MapTypeId.ROADMAP; // ��˹��ٻẺἹ������ʴ�
	// ��˹� DOM object �������Ἱ�����ʴ� ������� div id=map_canvas
	var my_DivObj=$("#map_canvas")[0];
	// ��˹� Option �ͧἹ���
	var myOptions = {
		zoom: 13, // ��˹���Ҵ��� zoom
		center: my_Latlng , // ��˹��ش��觡�ҧ �ҡ����� my_Latlng
		mapTypeId:my_mapTypeId // ��˹��ٻẺἹ��� �ҡ����� my_mapTypeId
	};
	map = new GGM.Map(my_DivObj,myOptions); // ���ҧἹ�������纵�������㹪��� map
	
	my_Marker = new GGM.Marker({ // ���ҧ��� marker ���㹵���� my_Marker
		position: my_Latlng,  // ��˹���������ǡѺ�ش��觡�ҧ
		map: map, // ��˹���� marker �����ѺἹ������ instance ��� map
		draggable:true, // ��˹��������ö�ҡ��� marker �����
		title:"��ԡ�ҡ�����ҵ��˹觨ش����ͧ���!" // �ʴ� title ��������������������˹��
	});
	
	// ��˹� event ���Ѻ��� marker ���������ش����ҡ��� marker ���ӧҹ����	
	GGM.event.addListener(my_Marker, 'dragend', function() {
		var my_Point = my_Marker.getPosition();  // �ҵ��˹觢ͧ��� marker ����͡��ҡ���ǻ����
        map.panTo(my_Point); // ���Ἱ����ʴ�价���� marker		
        $("#lat_value").val(my_Point.lat());  // ��Ҥ�� latitude ��� marker �ʴ�� textbox id=lat_value
        $("#lon_value").val(my_Point.lng());  // ��Ҥ�� longitude ��� marker �ʴ�� textbox id=lon_value 
        $("#zoom_value").val(map.getZoom());  // ��Ң�Ҵ zoom �ͧἹ����ʴ�� textbox id=zoom_valu			
	});		

	// ��˹� event ���Ѻ���Ἱ��� ������ա������¹�ŧ��� zoom
	GGM.event.addListener(map, 'zoom_changed', function() {
		$("#zoom_value").val(map.getZoom());   // ��Ң�Ҵ zoom �ͧἹ����ʴ�� textbox id=zoom_value 	
	});

}
$(function(){
	// ��ǹ�ͧ�ѧ��ѹ���Ҫ���ʶҹ����Ἱ���
	var searchPlace=function(){ // �ѧ��ѹ ����Ѻ�ѹ��ʶҹ��� ���� searchPlace
		var AddressSearch=$("#namePlace").val();// ��Ҥ�Ҩҡ textbox ����͡�����㹵����
		if(geocoder){ // ��Ǩ�ͺ��Ҷ���� Geocoder Object 
			geocoder.geocode({
				 address: AddressSearch // ����觪���ʶҹ���令���
			},function(results, status){ // �觡�Ѻ��ä����繼��Ѿ�� ���ʶҹ�
      			if(status == GGM.GeocoderStatus.OK) { // ��Ǩ�ͺʶҹ� ����ҡ��
					var my_Point=results[0].geometry.location; // ��Ҽ��Ѿ��ͧ�ԡѴ �������������
					map.setCenter(my_Point); // ��˹��ش��ҧ�ͧἹ���价�� �ԡѴ���Ѿ��
					my_Marker.setMap(map); // ��˹���� marker �����ѺἹ������ map					
					my_Marker.setPosition(my_Point); // ��˹����˹觢ͧ��� marker ��ҡѺ �ԡѴ���Ѿ��
					$("#lat_value").val(my_Point.lat());  // ��Ҥ�� latitude �ԡѴ���Ѿ�� �ʴ�� textbox id=lat_value
					$("#lon_value").val(my_Point.lng());  // ��Ҥ�� longitude �ԡѴ���Ѿ�� �ʴ�� textbox id=lon_value 
					$("#zoom_value").val(map.getZoom()); // ��Ң�Ҵ zoom �ͧἹ����ʴ�� textbox id=zoom_valu	 							
				}else{
					// ������辺�ʴ���ͤ�����
					alert("�š�ä����������� ��سҤ������� ���;�������ʶҹ�����١��ͧ: " + status);
					$("#namePlace").val("");// ��˹���� textbox id=namePlace �����ҧ����Ѻ��������
				 }
			});
		}		
	}
	$("#SearchPlace").click(function(){ // ����ͤ�ԡ������ id=SearchPlace ���ӧҹ�ѧ��ѹ����ʶҹ���
		searchPlace();	// �ѧ��ѹ����ʶҹ���
	});
	$("#namePlace").keyup(function(event){ // ����;����Ӥ���㹡��ͧ����
		if(event.keyCode==13){	// 	��Ǩ�ͺ������ҡ� ����繻��� Enter ������¡�ѧ��ѹ����ʶҹ���
			searchPlace();		// �ѧ��ѹ����ʶҹ���
		}		
	});

});
$(function(){
	// ��Ŵ ʤ�Ի google map api ����������Ŵ���º��������
	// ��ҵ���� ���������� google map api
	// v=3.2&sensor=false&language=th&callback=initialize
	//	v �����ѹ� 3.2
	//	sensor ��˹��������ö�ʴ����˹觷��ԴἹ��������� ���������Ѻ��Ͷ�� ������ false
	//	language ���� th ,en �繵�
	//	callback ������¡��ѧ��ѹ�ʴ� Ἱ��� initialize	
	$("<script/>", {
	  "type": "text/javascript",
	  src: "http://maps.google.com/maps/api/js?v=3.2&sensor=false&language=th&callback=initialize"
	}).appendTo("body");	
});