---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

// const coreMembers = [
//     {
//         avatar: 'https://www.github.com/yyx990803.png',
//         name: 'Evan You',
//         title: 'Creator',
//         links: [
//             // { icon: 'github', link: 'https://github.com/yyx990803' },
//             // { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
//         ]
//     },
// ]
const partners = [
    {
        avatar: 'https://cdn.discordapp.com/attachments/1217947923304681532/1217947945761112186/Photo_no-12_1.jpg?ex=6605e16a&is=65f36c6a&hm=6300ee2a85160f8ad230abc358c85966508b315227a1397558938a8a36581b0b&',
        name: 'Lucas W.',
        title: 'Programmation, Électronique, Communication',
        links: [
            // { icon: 'github', link: 'https://github.com/yyx990803' },
            // { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
        ]
    },
    {
        avatar: 'https://media.discordapp.net/attachments/928974594767990784/1205982669486428312/image.png?ex=65ff43e2&is=65eccee2&hm=9d29e966dc9b8ab9fbac66a25f8581072a6f89ba8081cdfa4efd1fc1670ab1c3&=&format=webp&quality=lossless&width=682&height=671',
        name: 'Jessy K.',
        title: 'Programmation, Conception',
        links: [
            // { icon: 'github', link: 'https://github.com/yyx990803' },
            // { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
        ]
    },
    {
        avatar: 'https://media.discordapp.net/attachments/1217947923304681532/1217948696600117318/image.png?ex=6605e21d&is=65f36d1d&hm=f4b0cb051054b64636cebfb35fd1e47a304d35901fd64686cd9ff902bc1e5750&=&format=webp&quality=lossless',
        name: 'Florian V.',
        title: 'Design, Programmation',
        links: [
            // { icon: 'github', link: 'https://github.com/yyx990803' },
            // { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
        ]
    },
    {
        avatar: 'https://i.pinimg.com/originals/11/f1/98/11f1984f2b16064d007fd99e9c320908.jpg',
        name: 'Matthieu G.',
        title: 'Sacrifice honorable',
        links: [
            // { icon: 'github', link: 'https://github.com/yyx990803' },
            // { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
        ]
    },
]
</script>

<VPTeamPage>
  <!-- <VPTeamPageTitle>
    <template #title>Our Team</template>
    <template #lead>...</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="coreMembers" /> -->
  <VPTeamPageSection>
    <template #title>Equipe</template>
    <template #lead>Liste des personnes ayant contribué à la création du projet B.R.A.S</template>
    <template #members>
      <VPTeamMembers size="small" :members="partners" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>