import { Component } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent {
  title = 'A Garden of Mirrors.'
  textSource = '';
  imageSource = 'assets/image1.jpeg'
  buttonSource = 'Traverse'
  
  imageArray = [
    'assets/image2.png', 'assets/image3.png', 'assets/image4.png', 'assets/image5.png', 'assets/image6.png', 'assets/image7.png', 'assets/image8.png', 'assets/image9.png', 'assets/image10.png', 'assets/image11.png', 'assets/image12.png', 'assets/image13.png', 'assets/image14.png', 'assets/image15.png', 'assets/image16.png', 'assets/image17.png', 'assets/image18.png', 'assets/image19.png', 'assets/image20.png', 'assets/image21.png', 'assets/image22.png', 'assets/image23.png', 'assets/image24.png', 'assets/image25.png', 'assets/image26.png', 'assets/image27.png', 'assets/image28.png', 'assets/image29.png', 'assets/image30.png'
    
  ]

  textArray = [
    'In the garden of fractured reflections, statues crawl, Through wet broken mirrors, their whispers enthrall.',

    'Among labyrinthine shelves where knowledge intertwines, A library maze, where introspection aligns.',

    'In pages adorned with the ink of contemplation, Mirrored shards reflect the mind’s exploration.',

    'The garden blooms with echoes of silent contemplation, A dance of broken statues, seeking liberation.',

    'Reflections merge, a kaleidoscope of thought, In the library maze, where wisdom is sought.',

    'Through the wet broken mirrors, a glimpse of the soul, In the garden of verses, broken statues find their role.',

    'In the whispers of pages, echoes of the past, Broken statues navigate, memories amassed.',

    'Mirrored fragments reveal the dance of time, In the garden’s embrace, a reflective paradigm.',

    'In the library maze, where shadows converse, Statues pause for introspection, in prose they immerse.',

    'Wet broken mirrors reflect the reader’s gaze, A labyrinth of stories, each a different maze.',

    'Among the shelves, a symphony of books, Statues ponder, lost in reflective nooks.',

    'In the garden’s quiet, where thoughts intertwine, Broken statues seek meaning, in verses they find.',

    'Through the mirrors’ distortion, a distorted truth, In the library maze, introspection finds its youth.',

    'Garden whispers and statues’ silent pleas,In broken reflections, the library keys.',

    'A dance of metaphors, a literary trance, Broken statues waltz through the mirrors’ expanse.',

    'Beneath the weeping willow of the labyrinth’s core, Statues waltz through echoes, seeking something more.',

    'In the garden’s reflection, a maze of green and gold, Broken mirrors unveil stories yet untold.',

    'Pages turn, a rustle in the library breeze, Statues in introspection, beneath the book-laden trees.',

    'Wet mirrors shimmer with unspoken tales, In the dance of broken statues, a narrative prevails.',

    'Among the literary vines, a serpentine path, Reflections intertwine, escaping the aftermath.',

    'In the silent corridors, where whispers softly weave, Statues confront reflections, the past they retrieve.',

    'Through the garden’s chaos, a contemplative grace, Broken statues wander, leaving no trace.',

    'Within the pages, an introspective trance, Statues navigate the labyrinth, a timeless dance.',

    'INT. LIBRARY MAZE - NIGHT. Dimly lit shelves stretch endlessly, forming a labyrinth of knowledge. The air is filled with the faint scent of old books. BROKEN STATUES, with faces frozen in expressions of longing, emerge from the shadows, navigating the maze of towering bookcases.',

    'Close-up on a WET BROKEN MIRROR, mounted on a weathered wooden stand. The statues pass by, their reflections distorted in the shimmering surface. Each statue seems to carry a silent story within its fractured form.',

    'EXT. GARDEN - CONTINUOUS. The library maze opens into a mystical garden bathed in moonlight. The broken statues step onto the dew-kissed grass, their movements synchronized with the melancholic rustle of leaves. The garden is a sanctuary of contemplation.',

    'One statue, with an outstretched hand, touches a REFLECTIVE POND. Ripples distort its own reflection, mirroring the internal struggles and introspection within.',

    'INT. LIBRARY MAZE - CONTINUOUS. Back in the maze, the statues approach a SHELF OF VERSES. Each book is a portal to another world, another realm of thought. The statues run their hands over the spines, absorbing the wisdom within.',

    'The maze seems to shift and change, an ever-evolving puzzle of corridors and passages. The statues find themselves lost in a sea of knowledge, mirroring the complexity of their own existence.',

    'EXT. GARDEN - DAWN. As the first light of dawn breaks, the broken statues return to the garden. The wet broken mirrors are now illuminated by the gentle sunlight, revealing a mosaic of reflections that tell tales of resilience and discovery.',
    
    'INT. LIBRARY MAZE - NIGHT. The broken statues continue their silent journey through the labyrinthine library. Suddenly, one statue, seemingly more weathered than the rest, steps forward. As it touches a particularly ancient tome on a dusty shelf, the shelves around it begin to shift and rearrange, revealing a hidden passageway.',

    'SECRET CHAMBER - CONTINUOUS. The broken statue, now animated with a mysterious energy, enters a hidden chamber filled with ancient artifacts and forgotten books. At the center of the room stands a MYSTERIOUS FIGURE, cloaked in shadows.',

    'MYSTERIOUS FIGURE (voice echoing). You have found your way, seeker. The broken mirrors and statues were a test of your resolve. The broken statue, now revealed to be a long-forgotten guardian, listens intently.',

    'MYSTERIOUS FIGURE (CONT’D). You are not alone in your quest for introspection. The garden and the maze are the keys to unlocking the true power within.',

    'The guardian learns that the broken statues were once protectors of a hidden knowledge, guarding the secrets of the garden and the maze. The reflections in the wet mirrors were a riddle, a pathway to a higher understanding.',

    'EXT. GARDEN - DAWN. The guardian emerges from the hidden chamber, leading the broken statues back into the garden. As the first rays of dawn illuminate the reflective pond, a portal opens, revealing a passage to a realm of boundless wisdom.',

    'The broken statues, now imbued with newfound purpose, step through the portal, leaving the garden behind. The Mysterious Figure watches, its presence lingering in the library maze, where introspection and revelation continue to intertwine.',

    'In the library maze where shadows play, Broken statues in silent contemplation. A weathered guardian finds the way, Touches a tome, sparks a revelation.',
  ]

  traverse(){
    let randomText = Math.floor(Math.random() * this.textArray.length);
    let newText = this.textArray[randomText];
    this.textArray.splice(randomText, 1);

    let randomButton = Math.floor(Math.random() * newText.split(' ').length);

    this.buttonSource = newText.split(' ')[randomButton]

    let randomImage = Math.floor(Math.random() * this.imageArray.length);
    let newImage = this.imageArray[randomImage];
    this.imageArray.splice(randomImage, 1);
    
    this.textSource = newText;
    this.imageSource = newImage;
  }
}
