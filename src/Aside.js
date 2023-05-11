import NavItem from "./NavItem"

export default function AsideBlock(){
    const titles = [
        {title: 'Главная'},
        {title: 'Статьи'},
        {title: 'Контакты'},
        {title: 'Еще какая-то фигня'},
        {title: 'Заказы'},
        {title: 'Новая фигня'},
    ]

    return (    
      <aside className = 'navigation'>
        <nav>
          <ul>
            <NavItem>{titles[0].title}</NavItem>
            <NavItem>{titles[1].title}</NavItem>
            <NavItem>{titles[2].title}</NavItem>
            <NavItem>{titles[3].title}</NavItem>
            <NavItem>{titles[4].title}</NavItem>
            <NavItem>{titles[5].title}</NavItem>        
          </ul>
        </nav>
      </aside>
    )
  }