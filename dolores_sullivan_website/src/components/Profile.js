import React from 'react';
import headshot from './../images/headshot.jpg';

export default function Profile() {
  return(
    <div className="profile">
      <div className="inner-container">
        <img src={headshot} alt="Delores Sullivan" />
        <p className="blurb">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia imperdiet nunc, vitae bibendum mi convallis ut. Sed cursus nisi nec ipsum lacinia, ac elementum ante viverra. Etiam leo massa, hendrerit a nunc quis, pretium molestie neque. Aliquam a lectus non felis porttitor facilisis. Fusce sed fringilla justo. Proin luctus dui eu neque facilisis tempor. Sed efficitur, nisi a congue iaculis, eros urna semper purus, eu porttitor justo velit vel metus. Donec cursus nisl leo, vel pulvinar massa malesuada blandit. Ut et posuere ipsum. Nam justo erat, pharetra ac nulla sit amet, aliquet malesuada felis. Praesent condimentum viverra rhoncus. Nunc mauris lorem, lobortis nec tortor in, faucibus scelerisque leo. Maecenas ac dictum urna. Pellentesque sodales diam id nibh aliquet, at aliquam magna convallis. Maecenas in metus tellus.

        Proin diam erat, tempor a malesuada eu, suscipit ultricies magna. Pellentesque consectetur nisl vitae sapien pulvinar, eget pellentesque lectus congue. Mauris ac libero sed ante ornare tincidunt posuere non lorem. Suspendisse semper risus ut justo sagittis, vel mattis erat lacinia. Ut posuere, magna ac vehicula efficitur, erat mi malesuada ligula, ac maximus nunc quam sed elit. Mauris dignissim tortor non ligula luctus placerat. Mauris feugiat, risus ut dapibus convallis, metus risus iaculis felis, sit amet pharetra nunc enim eget ipsum. Vivamus convallis semper scelerisque. Nullam ornare lacus nisl, at tempor ligula sodales eget. Aenean consectetur mollis mauris, sed gravida nisl. Mauris dictum, nibh ut imperdiet pharetra, lorem leo elementum sem, ac congue nisl diam vitae libero. Sed convallis nisl faucibus ligula hendrerit vestibulum. Vestibulum porttitor augue at egestas tincidunt. Nunc cursus, nibh a tincidunt hendrerit, nisi felis consectetur arcu, ut interdum nunc arcu sed mauris. Quisque eget porta justo. Morbi auctor dignissim sem, et vulputate tortor cursus vel.

        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In odio elit, mattis eget orci a, faucibus lobortis ex. Aenean nec mauris nec nisl tincidunt ultricies sodales vel mi. Nulla scelerisque, mauris at hendrerit mollis, ante elit dictum eros, et fringilla sem quam a metus. Mauris sit amet faucibus dolor. Nunc sit amet porta eros, vel commodo neque. Donec non pretium dolor. Donec ut dictum dui. Cras et mi tempus, aliquet elit vel, posuere tortor. Nam fringilla, nunc ut finibus congue, mauris arcu accumsan ex, tincidunt porta lacus nisi quis leo. Sed ut pretium nulla. Cras consectetur ac ligula in lacinia. Integer nisi arcu, molestie vel volutpat vestibulum, tristique non nibh. Fusce orci tortor, placerat non eros quis, venenatis consectetur augue.</p>
      </div>
    </div>
  )
}
