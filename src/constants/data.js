import reactIcon from '../assets/images/react.png'
import jsIcon from '../assets/images/javascript.png'
import BootIcon from '../assets/images/bootstrap.png'
import htmlIcon from '../assets/images/html.png'
import cssIcon from '../assets/images/css.png'
import gitIcon from '../assets/images/git.png'
import figmaIcon from '../assets/images/figma.png'
import photoIcon from '../assets/images/photoshop.png'

// feature image 
import first from "../assets/images/first.svg";
import second from "../assets/images/second.svg";
import responsive from "../assets/images/responsive.png";
import creativity from "../assets/images/creativity.png";
import tool from "../assets/images/tool.svg";
import monitor from "../assets/images/monitor.png";




export const logo = [
  {
    id:'1',
    icon:reactIcon
  },
  {
    id:'2',
    icon:jsIcon
  },
  {
    id:'3',
    icon:BootIcon
  },
  {
    id:'4',
    icon:htmlIcon
  },
 
  {
    id:'6',
    icon:gitIcon
  },
  {
    id:'7',
    icon:figmaIcon
  }
]
//Feature Section data
export  const feature = [
    {
      id: "1",
      icon: first,
      name: "UI/UX",
    },
    {
      id: "2",
      icon: second,
      name: "Designing",
    },
    {
      id: "3",
      icon: responsive,
      name: "Responsive",
    },
    {
      id: "4",
      icon: tool,
      name: "Tools",
    },
    {
      id: "5",
      icon: creativity,
      name: "Creativity",
    },
  ];

///Image Home Slider

export const settings = {
  infinite: true,
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  lazyLoad: true,
  autoplay: false,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

// skills home page
export const tabs = [
  {
    id:'1',
    name:'Front-end developer',
    icon:second
  },
  {
    id:'2',
    name:'Website Design',
    icon:monitor
  },
  {
    id:'3',
    name:'UI/UX Designer',
    icon:first
  },
  
  {
    id:'4',
    name:'Responsive Design',
    icon:responsive
  },
  {
    id:'6',
    name:'Creativity',
    icon:creativity
  },
  {
    id:'6',
    name:'Tools',
    icon:tool
  }
];