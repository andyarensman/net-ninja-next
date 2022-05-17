import Head from 'next/head'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>Culpa incididunt consectetur. Non quid proident domesticarum. Anim doctrina praesentibus, quo labore anim fore quamquam ad cupidatat in quibusdam, et an irure nescius. Singulis voluptatibus et aliquip, hic magna enim ab fabulas, est esse quibusdam voluptate do sed non illustriora ea ubi multos illustriora qui malis aliquip praetermissum an admodum minim quis an elit hic amet officia laboris.Singulis sint pariatur. Est quo aute duis legam. Anim laboris hic occaecat ab labore eiusmod do expetendis.</p>
      <p>Qui sint malis velit vidisse. Eiusmod efflorescere aut singulis. Id doctrina non proident. In in esse irure quid, quamquam multos tempor constias fugiat, iudicem elit admodum quibusdam, aliquip qui enim voluptate.Officia export voluptate admodum ex constias se dolor officia, eram possumus in illustriora te laborum export quorum occaecat anim nam eu consequat praesentibus, te tempor an illum, hic eu labore ullamco hic eu ne aute probant. Aliquip multos dolore non export ubi export cernantur aliquip, singulis ipsum commodo, esse et eu aute constias id incididunt te quem est cupidatat summis ut deserunt exquisitaque, si sed reprehenderit, ita non quem export magna. Ut arbitror relinqueret id aut quis cupidatat aliquip do summis familiaritatem voluptate noster constias ne do iis sunt quid minim ne consequat elit proident id ingeniis e eiusmod, enim excepteur e distinguantur, commodo aliqua proident cernantur.</p>
      <Link href="/ninjas">
        <a>See Ninja Listing</a>
      </Link>
      <Footer />
    </div>
  )
}
