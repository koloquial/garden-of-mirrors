import { Component } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent {
  title = 'Garden of Mirrors.'
  textSource = '';
  imageSource = 'assets/image1.jpeg'
  buttonSource = 'TRAVERSE'
  
  imageArray = [
    'assets/image2.png', 'assets/image3.png', 'assets/image4.png', 'assets/image5.png', 'assets/image6.png', 'assets/image7.png', 'assets/image8.png', 'assets/image9.png', 'assets/image10.png', 'assets/image11.png', 'assets/image12.png', 'assets/image13.png', 'assets/image14.png', 'assets/image15.png', 'assets/image16.png', 'assets/image17.png', 'assets/image18.png', 'assets/image19.png', 'assets/image20.png', 'assets/image21.png', 'assets/image22.png', 'assets/image23.png', 'assets/image24.png', 'assets/image25.png', 'assets/image26.png', 'assets/image27.png', 'assets/image28.png', 'assets/image29.png', 'assets/image30.png', 'assets/image31.png','assets/image32.png', 'assets/image33.png', 'assets/image34.png', 'assets/image35.png', 'assets/image36.png', 'assets/image37.png', 'assets/image38.png', 'assets/image39.png', 'assets/image40.png', 'assets/image41.png', 'assets/image42.png', 'assets/image43.png', 'assets/image44.png', 'assets/image45.png', 'assets/image46.png', 'assets/image47.png', 'assets/image48.png', 'assets/image49.png', 'assets/image50.png', 'assets/image51.png', 'assets/image52.png', 'assets/image53.png', 'assets/image54.png', 'assets/image55.png', 'assets/image56.png', 'assets/image57.png', 'assets/image58.png', 'assets/image59.png', 'assets/image60.png', 'assets/image61.png', 'assets/image62.png', 'assets/image63.png', 'assets/image64.png', 'assets/image65.png', 'assets/image66.png', 'assets/image67.png', 'assets/image68.png', 'assets/image69.png', 'assets/image70.png', 'assets/image71.png', 'assets/image72.png', 'assets/image73.png', 'assets/image74.png', 'assets/image75.png', 'assets/image76.png', 'assets/image77.png', 'assets/image78.png', 'assets/image79.png', 'assets/image80.png', 'assets/image81.png', 'assets/image82.png', 'assets/image83.png', 'assets/image84.png', 'assets/image85.png', 'assets/image86.png', 'assets/image87.png', 'assets/image88.png', 'assets/image89.png', 'assets/image90.png', 'assets/image91.png', 'assets/image92.png', 'assets/image93.png', 'assets/image94.png', 'assets/image95.png', 'assets/image96.png', 'assets/image97.png', 'assets/image98.png', 'assets/image99.png', 'assets/image100.png', 'assets/image101.png',
    
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

    'Shifting shelves reveal a hidden door, A chamber cloaked in mystery untold. A figure speaks, a voice from yore,The statues’ purpose, a saga unfolds.',

    'Guardian and statues, a united quest, Through garden and maze, the secret keys. Reflections in mirrors put to the test, A riddle leading to wisdom’s seas.',

    'In mirrored garden where the statues stand, Once proud, now broken, tales of wisdom tell. Reflecting fractured forms, a shattered band, Infinite echoes weave a cryptic spell.',

    'Echo, once eloquent, in shards does find Solace amidst the shattered, ancient lore. Mirrors multiply the truth enshrined, Each glass a tale, a truth to explore.',

    'A moonlit garden with statues standing in silent contemplation. The air is filled with a mystical aura as the statues come to life, their eyes filled with an otherworldly glow.',

    'CLOSE UP on a statue named ECHO, once eloquent, now with fragmented features. Echo gazes at a MIRROR, reflecting an array of distorted images.',

    'ECHO (whispering). In the mirror’s dance, where does my soul lie?',

    'A stoic statue, AURELIUS, stands with resilience amidst shattered reflections. He touches a mirror, as if seeking a connection with the intangible.',

    'AURELIUS (voice echoing). Within the mirrors, resilience takes form.',

    'A marble figure with outstretched hands, reaching into the mirrors, fingers grazing fate.',

    'MARBLE FIGURE (longing). To touch the intangible, to clasp my soul’s reflection.',

    'The statues move through corridors of endless reflections, chasing elusive whispers and clues.',

    'The heart of the garden, where statues converge. A figure in timeless grace, eyes closed, embraces the dance of shadows.',

    'CLOSE UP on the FIGURE’s lips as it whispers secrets of the soul.',
    
    'The garden of mirrors holds its secrets as the statues stand, forever transformed by the dance between shadows and luminescence.',

    'In a garden of mirrors where shadows play, Statues of stone in the moonlight lay. Reflections dance in the silvered glass, Whispers of secrets from the ages past.',

    'Chiseled faces with eyes that gleam, Guardians of secrets, keepers of the dream. Silent sentinels in the pale moon’s glow, In the mirrored garden where enigmas grow.',

    'A marble dancer frozen in time, Her visage mirrored in rhythm and rhyme. Does she waltz in the moonlit night, Or in the shadows, does she take flight?',

    'Statuesque faces with tales untold, In the garden of mirrors, mysteries unfold. Echoes of whispers in the cool night air, As moonbeams caress each stony stare.',

    'A mirrored labyrinth, a puzzle unsolved, In the moonlit garden, riddles evolved. Reflections conceal and reflections reveal, A cryptic dance where illusions conceal.',

    'Amidst the statues, a detective’s quest, To decipher the secrets the mirrors suggest. A trail of shadows in the pale moon’s sheen, A mystery in stone, yet unseen.',

    'As night descends, the statues converse, In the mirrored garden, a spectral universe. Each reflection, a clue to the enigma’s core, A puzzle in statues, a mystery galore.',

    'In the garden of mirrors where echoes linger, A detective’s mind, nimble as a finger. Unravel the secrets, piece by piece, In the moonlit stillness, let the mysteries release.',

    'INT. ENCHANTED GARDEN - DAY. A lush garden with towering hedges made of mirrors reflects the sunlight in dazzling patterns. In the center stands a magnificent LIBRARY, its shelves stretching towards the sky. A statue, elegantly sculpted in the likeness of a nymph, comes to life.',

    'NIMBLE NYMPH (whispering to herself). A garden of mirrors, where reality dances with illusion.',

    'The Nymph gracefully glides through the garden, her movements echoing in the mirrored maze. She reaches the entrance of the library, its door carved with intricate patterns.',

    'NIMBLE NYMPH (CONT’D) (voiceover). A repository of dreams and knowledge, where tales are woven in the threads of imagination.',

    'The Nymph pushes open the library door and steps into a world of endless shelves, each filled with books of various shapes and sizes. The room seems to stretch infinitely in all directions.',

    'NIMBLE NYMPH (CONT’D)(looking around) In this labyrinth of words, I seek the essence of stories untold.',

    'As the Nymph wanders through the library, the books come to life, their characters and landscapes materializing around her. She dances with the characters, twirling through scenes of romance, adventure, and mystery.',

    'NIMBLE NYMPH (CONT’D)(whispering). A dance with words, where fiction and reality entwine.',

    'Suddenly, the mirrors within the library begin to reflect the stories in geometric patterns, creating a mesmerizing display of literary worlds. The Nymph continues her journey, now accompanied by the reflections of her own movements.',

    'NIMBLE NYMPH (CONT’D) (lost in thought) In the mirrors, a puzzle of possibilities, where every turn reveals a new facet of the narrative.',

    'The Nymph reaches the heart of the library, where a pedestal holds a book with a shimmering cover. She opens it, and a brilliant light spills forth, enveloping her in a cascade of words.',

    'NIMBLE NYMPH (CONT’D)(whispering, with reverence). The culmination of tales, the symphony of language. In this garden of mirrors, I have found the essence of storytelling.',

    'The Nymph, now bathed in the ethereal glow of the book, closes her eyes. The mirrors around her reflect a myriad of images, creating a surreal tableau of literary wonder.',

    'In twilight’s garden, mirrors weave their spell, A nymph, mysterious, treads the hidden way. Through shadows, to a library’s ancient swell, Where tales and whispers in the moonlight sway.',

    'Veiled in the night, the nymph seeks unseen lore, Reflections dance, a ballet of the unknown. In silent chambers, echoes touch the core, Of memories entwined, a spectral tone.',

    'Mirrors distort reality’s embrace, Illusions waltz with truths, a cryptic dance. In enigmatic realms, a sacred space, Where secrets linger, waiting for a chance.',

    'At the heart, a tome in whispers breathes, In shadows’ language, mystery unsheathes.',

    'In a garden forgotten, midst vines overgrown, A statue, once proud, in decay stood alone.',

    'Marble once smooth, now weathered and scarred, A relic of time in a neglected backyard.',

    'Once admired, a symbol of strength and grace, Now a mosaic of cracks on a stoic face.',

    'Whispers of wind through leaves decayed, Memories lingered, like dreams that once played.',

    'A silent witness to the changing scene, In solitude, the statue began to glean.',

    'Contemplating existence, reality’s thread, As the world around it continued to tread.',

    'In the moonlit garden, shadows long, The statue pondered where it went wrong.',

    'Was reality found in its external show? Or in the core hidden, deep below?',
    
    'As night embraced the scene in a tender glow, The statue grappled with what it could know.',

    'Accepting impermanence, a profound release, In decay found a strange sense of peace.',

    'A philosopher silent in the garden’s embrace, A symbol not of perfection, but of grace.',

    'Seasons marched on, an unending rhyme, The statue stood steadfast, transcending time.',

    'In a park forgotten, where time weaves its tale, Stood a statue with memories, fading and frail.',

    'Once a symbol of love, now weathered by years, Its features eroded, marked by silent tears.',
    
    'Gazing at the horizon, seeking what’s lost, In the echoes of time, memories tossed.',

    'A witness to laughter, ’neath blooming trees, Now crumbled and worn, carried by the breeze.',

    'In moments of quiet, when the park lay still,Recollections blurred, a fading love’s chill.',

    'Hands once entwined, a shared stolen glance, Lost to the ages, in time’s swift advance.',

    'As night wrapped the park in a silver-hued sheen, The statue pondered what love’s loss might mean.',

    'Could the essence endure, beyond the decay? Or were memories destined to fade away?',

    'In the silent night, a sorrowful song, Of a love that once thrived, now faded and gone.',

    'Yet, in the erosion, a strange beauty found, A love’s enduring spirit, on hallowed ground.',

    'The park, forgotten by many, held the decree, Of a love that still whispered, in stone’s memory.'

  ]

  traverse(){

    if(this.textArray.length <= 0){
      this.textSource = 'FADE OUT.'
      this.imageSource = 'assets/about.png';
      this.buttonSource = ''
    }else{
      let randomText = Math.floor(Math.random() * this.textArray.length);
      let newText = this.textArray[randomText];
      this.textArray.splice(randomText, 1);
  
      let valid = false;
      let randomButton = 0;
      while(!valid){
        randomButton = Math.floor(Math.random() * newText.split(' ').length);
        if(newText.split(' ')[randomButton].length > 3){
          valid = true;
        }
      }
      
      this.buttonSource = newText.split(' ')[randomButton].toUpperCase();
  
      let randomImage = Math.floor(Math.random() * this.imageArray.length);
      let newImage = this.imageArray[randomImage];
      this.imageArray.splice(randomImage, 1);
      
      this.textSource = newText;
      this.imageSource = newImage;

      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  }
}
