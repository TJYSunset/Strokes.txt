# Strokes.txt

本项目旨在为 [Andrew West 先生提供的象形文字描述序列（IDS）](http://www.babelstone.co.uk/CJK/IDS.TXT)中所有未经拆分，即 IDS 等于自身的字符，补充笔画序列。

本项目正在施工中。

## 注意

同形汉字在不同地区的笔顺可能不同。异形同码字（如有）将按照中国大陆（？）标准。

本项目主要参考[汉典](http://www.zdic.net)的笔画顺序。

本项目维护者并非语言学家（甚至语文向来挂科），所以请不要对其正确性期望太高。

## 所以这有什么卵用？

可以用于实现一个类搜狗拼音/微软拼音的字形拆解反查功能，例如 `d'd'shui` → `冰`，`d'd'd'zhi'd't'p'd` → `渋`。

## 进度

+ [ ] 未包含在 Unicode 中的汉字组件
+ [ ] `4E00-9FFF` CJK Unified Ideographs
+ [ ] `3400-4DBF` CJK Unified Ideographs Extension A
+ [ ] `20000-2A6DF` CJK Unified Ideographs Extension B
+ [ ] `2A700-2B73F` CJK Unified Ideographs Extension C
+ [ ] `2B740-2B81F` CJK Unified Ideographs Extension D
+ [ ] `2B820-2CEAF` CJK Unified Ideographs Extension E
+ [ ] `2CEB0-2EBEF` CJK Unified Ideographs Extension F

## 格式

Strokes.txt 可视为[逗号分隔文件（CSV）](https://tools.ietf.org/html/rfc4180)。第四列为 IDS（如有）。第五列将被用作注释且内容必定以 `#` 开始。

Strokes.txt 将使用 [Andrew West 先生的笔画录入标准](http://www.babelstone.co.uk/CJK/CJKStroke.html)：

**Code Point**|**Character**|**Character Name**|**Expanded Name**|**Example**
:-----:|:-----:|:-----:|:-----:|:-----:
U+31C0|㇀|CJK STROKE T|提 tí|2nd stroke of 冰
U+31C1|㇁|CJK STROKE WG|彎鉤 wān gōu|2nd strokeof 狐
U+31C2|㇂|CJK STROKE XG|斜鉤 xié gōu|5th stroke of 我
U+31C3|㇃|CJK STROKE BXG|扁斜鉤 biǎn xié gōu|2nd stroke of 心
U+31C4|㇄|CJK STROKE SW|豎彎 shù wān|3rd stroke of 亡<br>4th stroke of 四
U+31C5|㇅|CJK STROKE HZZ|橫折折 héng zhé zhé|1st stroke of 卍
U+31C6|㇆|CJK STROKE HZG|橫折鉤 héng zhé gōu|1st stroke of 羽<br>1st stroke of 也
U+31C7|㇇|CJK STROKE HP|橫撇 héng piě|1st stroke of 又<br>4th stroke of 今
U+31C8|㇈|CJK STROKE HZWG|橫折彎鉤 héng zhé wān gōu|1st stroke of 飞<br>2nd stroke of 九
U+31C9|㇉|CJK STROKE SZWG|豎折彎鉤 shù zhé wān gōu|3rd stroke of 弓<br>2nd stroke of 马
U+31CA|㇊|CJK STROKE HZT|橫折提 héng zhé tí|2nd stroke of 计<br>2nd stroke of 鳩
U+31CB|㇋|CJK STROKE HZZP|橫折折撇 héng zhé zhé piě|7th stroke of 建<br>1st stroke of 及
U+31CC|㇌|CJK STROKE HPWG|橫撇彎鉤 héng piě wān gōu|6th stroke of 邮
U+31CD|㇍|CJK STROKE HZW|橫折彎 héng zhé wān|5th stroke of 投
U+31CE|㇎|CJK STROKE HZZZ|橫折折折 héng zhé zhé zhé|1st stroke of 凸
U+31CF|㇏|CJK STROKE N|捺 nà|3rd stroke of 大<br>7th stroke of 走
U+31D0|㇐|CJK STROKE H|橫 héng|1st stroke of 丁<br>1st stroke of 七
U+31D1|㇑|CJK STROKE S|豎 shù|4th stroke of 中<br>2nd stroke of 五
U+31D2|㇒|CJK STROKE P|撇 piě|1st stroke of 乏
U+31D3|㇓|CJK STROKE SP|豎撇 shù piě|2nd stroke of 大
U+31D4|㇔|CJK STROKE D|點 diǎn|1st stroke of 永
U+31D5|㇕|CJK STROKE HZ|橫折 héng zhé|2nd stroke of 田
U+31D6|㇖|CJK STROKE HG|橫鉤 héng gōu|1st stroke of 疋<br>1st stroke of 子
U+31D7|㇗|CJK STROKE SZ|豎折 shù zhé|1st stroke of 断<br>2nd stroke of 山<br>2nd stroke of 东
U+31D8|㇘|CJK STROKE SWZ|豎彎左 shù wān zuǒ|6th stroke of 肅 (although I don't write it that way)
U+31D9|㇙|CJK STROKE ST|豎提 shù tí|3rd stroke of 民
U+31DA|㇚|CJK STROKE SG|豎鉤 shù gōu|1st stroke of 水
U+31DB|㇛|CJK STROKE PD|撇點 piě diǎn|1st stroke of 巡<br>1st stroke of 女
U+31DC|㇜|CJK STROKE PZ|撇折 piě zhé|3rd stroke of 公<br>4th stroke of 弘
U+31DD|㇝|CJK STROKE TN|提捺 tí nà|4th stroke of 尐<br>2nd stroke of 入
U+31DE|㇞|CJK STROKE SZZ|豎折折 shù zhé zhé|4th stroke of 亞<br>6th stroke of 鼎<br>1st stroke of 卐<br>4th stroke of 吳<br>3rd stroke of 专<br>
U+31DF|㇟|CJK STROKE SWG|豎彎鉤 shù wān gōu|7th stroke of 乱<br>3rd stroke of 己
U+31E0|㇠|CJK STROKE HXWG|橫斜彎鉤 héng xié wān gōu|1st stroke of 乙
U+31E1|㇡|CJK STROKE HZZZG|橫折折折鉤 héng zhé zhé zhé gōu|1st stroke of 乃
U+31E2|㇢|CJK STROKE PG|撇鉤 piě gōu|1st stroke of 乄
U+31E3|㇣|CJK STROKE Q|圈 quān|6th stroke of 㔔

## 版权

本项目是 [Andrew West 先生的 IDS.txt](http://www.babelstone.co.uk/CJK/IDS.TXT) 与[汉典](http://www.zdic.net)的衍生作品。

IDS.txt 在其文件主体中显式声明了其不受版权保护。

汉典未提供明确版权声明且似乎[自相矛盾](http://bbs.zdic.net/thread-223393-1-1.html)，但截至此时其[关于页面](http://www.zdic.net/aboutus/)（[Internet Archive 存档](https://web.archive.org/web/20180530141342/http://www.zdic.net/aboutus/)）称：

> ……得益于世界各地许多华人志愿者的贡献和他们无私伟大的爱心，所有的这些工作是在基于CC0 1.0 Public Domain Dedication在过去这些年中得已完成的，并正在被完善。到目前为止，所有汉典所属的网站均在由个人的开支运行，并由义务的贡献者进行着维护和管理。汉语词典中的国语辞典原始资料来源于台湾教育部《重編國語辭典修訂本》（CC BY-ND 3.0 臺灣授權）……

鉴于本项目并不参考国语辞典部分，本人有理由相信被衍生的该站内容可视为属于 Public Domain。

本项目以 [Do What The Fuck You Want To Public License](LICENSE) 授权。