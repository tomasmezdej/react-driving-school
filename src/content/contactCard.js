import { FaFacebook } from 'react-icons/fa';
import { BsInstagram, /* BsTwitter, */ BsFillTelephoneFill } from 'react-icons/bs';
import { SiGmail } from "react-icons/si"

const iconSize = 40
const iconColor = "#f34643"

export const info = {
  title: "Contact us",
  subtitle: "Feel free to contact us anytime. We will get back to you ass soon as we can.",
  channels:[
    {
      site: "Facebook",
      icon: <FaFacebook size={iconSize} style={{"color": "#4267B2"}} />,
      description: "Zuevauto",
      link: ""
    },
    /*
    {
      site: "Twitter",
      icon: <BsTwitter size={iconSize} style={{"color": "#1DA1F2"}} />,
      description: "zuevauto.twitter",
      link: ""
    },
    */
    {
      site: "Instagram",
      icon: <BsInstagram size={iconSize} style={{
                "color": "white",
                padding: "3px",
                borderRadius: "5px",
                "background": "radial-gradient(circle at 33% 100%, #fed373 4%, #f15245 30%, #d92e7f 62%, #9b36b7 85%, #515ecf)"
              }}
            />,
      description: "zuevauto.instagram",
      link: ""
    },
    {
      site: "Gmail",
      icon: <SiGmail size={iconSize} style={{"color": "#BB001B"}} />,
      description: "zuevauto@gmail.com",
      link: ""
    },
    {
      site: "Phone",
      icon: <BsFillTelephoneFill size={iconSize} style={{"color": iconColor}} />,
      description: "+7 903 666-74-79",
      link: ""
    }

  ]

}