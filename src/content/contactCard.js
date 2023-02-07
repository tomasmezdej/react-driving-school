import { FaFacebook } from 'react-icons/fa';
import { BsInstagram} from 'react-icons/bs';

const iconSize = 40

export const info = {
  title: "Contact us",
  subtitle: "Feel free to contact us anytime. We will get back to you ass soon as we can.",
  address: {
    city: "NW Bobcat Lane",
    street: "St. Robert, MO 65584-5678",
    phone: "+7 903 666-74-79",
    email: "zuevauto@gmail.com",
    ico: "xx yyy zzz"
  },
  copyTooltipText: "Copy to clipboard",
  iframeLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48374.32498333731!2d-74.25381313438096!3d40.73132627501041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25370329a0e1d%3A0xe1bcdc2adcfee473!2zTmV3YXJrLCBOZXcgSmVyc2V5LCBTcG9qZW7DqSDFoXTDoXR5IGFtZXJpY2vDqQ!5e0!3m2!1ssk!2ssk!4v1675602682320!5m2!1ssk!2ssk",
  facebook: {
    site: "Facebook",
    icon: <FaFacebook size={iconSize} style={{"color": "#4267B2"}} />,
    description: "",
    link: "",
  },
  instagram: {
    site: "Instagram",
    icon: <BsInstagram size={iconSize} style={{
              "color": "white",
              padding: "3px",
              borderRadius: "5px",
              "background": "radial-gradient(circle at 33% 100%, #fed373 4%, #f15245 30%, #d92e7f 62%, #9b36b7 85%, #515ecf)"
            }}
          />,
    description: "",
    link: "",
  }

}