import { Component } from '@angular/core';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent {

  newsItems=[
    {
      link:"https://www.bizzbuzz.news/market/ipo/lords-mark-industries-aims-to-go-public-in-2024-1270922",
      title:'Lord’s Mark Industries aims to go public in 2024',
      content:"Lord's Mark Industries, a diversified business group, has announced that it is aiming to hit the capital markets and go for public listing in the first half of 2024 to raise up to Rs. 500 crores. IDBI Capital and Mirae Asset are the merchant bankers for the listing......",
      imageURL: "../assets/news1.jpg"
    },
    {
      link:"https://www.livemint.com/money/personal-finance/lords-mark-industries-gets-direct-insurance-broking-licence-from-irdai-11662548755509.html",
      title:'Lord’s Mark Industries gets direct insurance broking licence from Irdai',
      content:'Lords Mark Insurance Broking is already in talks with a few leading insurance firms to formalise collaborations with them for launching life and general insurance products on its platform called Policy King. The direct broking licence marks Lord’s Mark Industries’ foray into the insurance space...',
      imageURL:'../assets/news2.jpg'
    },
    {
      link:"https://currentaffairs.adda247.com/lords-mark-insurance-recieves-direct-insurance-brokers-licence-by-irdai/",
      title:'Lord’s Mark Insurance receives direct insurance broker’s licence by IRDAI',
      content:'Lord’s Mark Insurance receives insurance licence: Key HighlightsInsurance from Lord’s Mark Insurance in order to formalise relationships for the launch of life and general insurance products on its Policy King platform, broking is already in talks with a few top insurance providers.Customers may compare all insurance offerings through Policy King’s smartphone app, which can be downloaded and installed.',
      imageURL:'../assets/news3.jpg'
    },
    {
      link:"https://www.bizzbuzz.news/eco-buzz/lords-mark-to-illuminate-ayodhya-with-led-lighting-1279475",
      title:'Lord’s Mark to illuminate Ayodhya with LED lighting',
      content:"Mumbai: Lord's Mark Industries Private Ltd., a diversified business group,has won the contract to set up LED-based smart solar street The two industry 5.0 startups in this cohort are: Spintly, an IoT platform for smart buildings; and Asets, a multidisciplinary CAD, simulation and engineering design platform",
      imageURL:'../assets/news4.jpg'
    },
    {
      link:"https://www.financialexpress.com/healthcare/diagnostic/lords-mark-industries-launches-mark-microbiotech-to-conduct-genome-testing-in-india/3157356/",
      title:'Lord’s Mark Industries launches Mark Microbiotech to conduct genome testing in India',
      content:"The company will also collaborate with leading scientific and research institutes to develop and deploy diagnostic tools for diseases like.Lord’s MarkIndustries also has its patented algorithm called SNAPPY for calculating the Polygenic Risk Score (PRS), which estimates an individual’s genetic risk (predisposition) for a trait or condition",
      imageURL:'../assets/news5.jpg'
    },
    {
      link:"https://www.businesstoday.in/latest/corporate/story/lords-mark-industries-inks-5-yr-jv-with-indian-railways-psu-315807-2021-12-16",
      title:"Lord's Mark Industries inks 5-yr JV with Indian Railways PSU",
      content:"Through the JV initiative, LordsMed -- Lord's Mark's pharma division -- will aim to improve the public healthcare infrastructure in the country by enabling patients access to cutting edge healthcare products developed through indigenous technology.In the initial phase, Lordsmed will distribute healthcare equipment to railway hospitals in the country. ",
      imageURL:'../assets/news6.jpg'
    }
  ]

}
