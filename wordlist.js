// Example CSV data
var csvData = `a	Anh. An. Ai. Ba. Xa.	Anh (older brother, he). An (peace). Ai (who). Ba (three). Xa (far). Similar to a in father.	a_banmai.mp3,a_thuminh.mp3
â	Âm. Bây. Cây. Dây. Mây.	Âm (sound). Bây giờ (now). Cây (tree). Dây (string). Mây (cloud). Similar to say or bay.	â_banmai.mp3
a â	An. Âm. Ba. Bây.		aâ_banmai.mp3
â →	lâu. đây. tuần. 	long. here. week.	lâuđâytuần_banmai.mp3
ă	Ăn. Năm. Căn. Ngăn. Thăm. Trăm.	ăn (to eat), năm (year), căn (house, dwelling), ngăn (to prevent, to hinder), thăm (to visit), trăm (hundred)	ă_banmai.mp3
a ă	An. Ăn. Nam. Năm.		aă_thuminh.mp3
á à	Cái. Tráng. Các. Này. Hành. Nào.	Cái (Thing), Tráng (Strong, resilient), Các (Plural marker), Này (This), Hành (Onion), Nào (Which)	áà_banmai.mp3
ắ ặ	Bắt. Gắng. Chẳng. Mặt. Gặp.	Bắt (to catch), Gắng (to strive), Chẳng (not, don't), Mặt (face), Gặp (to meet).	ắặ_banmai.mp3
o	Cho. Có. Đó. Bỏ. Bỏng.	Cho (for, to give), Có (to have, to possess), Đó (that, there), Bỏ (to leave, to abandon), Bỏng (burn, scald).	o_banmai.mp3
o	Cho. Có. Con.	Cho (for, to give), Có (to have, to possess), Con (child, offspring). Klingt wie das Englische “gone”	o_banmai2.mp3
ô	Chôn. Cô. Tốn. Tôi. Rối. Không. Bông.	Tôi (I, me), Rối (confused), Tốn (to spend, to cost), Không (no, not), Bông (cotton, flower). Wie unser o.	ô_banmai.mp3
o ô	Có. Cô.		oô_banmai.mp3
ó ỏ	Có. Cỏ.		óỏ_banmai.mp3
o ô	Cho. Chôn.		oô_banmai2.mp3
o ô ơ	Có. Cố. Cơ.  	Có (to have, to possess), Cố (to try, to strive), Cơ (muscle, body).	oôơ_banmai.mp3
ơ	Mơ. Hơi. Chơi.	Mơ (to dream), Hơi (breath, air), Chơi (to play)	ơ_banmai.mp3
ơ	ở. Thở. Trời. Hợp. Được.	Ở (to be at, to reside), Thở (to breathe), Trời (sky, heaven), Hợp (to fit, to match), Được (to be able, to get).	ơ_banmai2.mp3
ơ	Cơ. ở.		ơ_banmai3.mp3
ơ	Lớn. Với. Mới. Nhớ. Chớ.	Lớn (big), Với (with), Mới (new), Nhớ (remember), Chớ (don't).	ơ_banmai4.mp3
ơ	Tôi. Tới.	Tôi (I, me), Tới (to arrive, to come).	ơ_banmai5.mp3
u	Quan. Bút. Cùng. Của. Rụt.	Quan (official, officer), Bút (pen), Cùng (together, same), Của (belonging to, of), Rụt (to withdraw, to pull back). Wie unser u	u_banmai.mp3,u_linhsan.mp3
ư	Nhưng. Như. Cứ. Chừng. Đừng.	Nhưng (but), Như (like, as), Cứ (just, keep on), Chừng (around, about), Đừng (don’t). Tiefes u in Richtung unser ü, in between food and bird	ư_banmai.mp3,ư_linhsan.mp3
u ư	Của. Cửa.	Của (belonging to, of), Cửa (door).	uư_banmai.mp3,uư_linhsan.mp3
e	bé. vẽ. vẻ. nghe.	bé (small, little), vẽ (to draw), vẻ (appearance, expression), nghe (to listen, to hear). Wie unser ä	e_banmai.mp3
ê	trên. lên. tiên. kiệt. biết. 	trên (on, above), lên (to go up, to ascend), tiên (fairy, celestial being), kiệt (narrow, limited), biết (to know, to understand). Wie unser e.	ê_banmai.mp3
e ê	bé. bế.	bé (small, little), bế (to carry, to hold).	eê_banmai.mp3
ắ ặ	mắt. mặt. mắt. mặt.	 nước mắt (tears, one tear), mặt (face)	ắặ_banmai2.mp3
nư	nư. ớ. nước.	Water	nư_thuminh.mp3
mư	mư. ơ. mươi. mư. ờ. mười.	mươi (tens scale), mười (ten)	ươ_banmai.mp3
ứ	ứ. trứ. trứng.	Egg	ứ_thuminh.mp3
→	Một cái giường.	One bed.	ns_banmai.mp3,ns_linhsan.mp3
x s	xa. sáng. xem. sống. 	far. morning. to see. to live.	xasáng_thuminh.mp3
ư ữ	nhưng . những .	but. many.	nhưngnhững_banmai.mp3`;