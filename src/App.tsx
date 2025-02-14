import React from 'react';
import { Heart, Camera, Candy, Coffee, Music } from 'lucide-react';
import { FloatingHearts } from './components/FloatingHearts';
import { Navbar } from './components/Navbar';


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 relative overflow-hidden">
      <Navbar />
      <FloatingHearts />

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <Heart className="w-16 h-16 text-pink-500 animate-pulse" />
          </div>

          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-4">
              Ajita Mishra
            </h1>
            <p className="text-xl md:text-2xl text-purple-700 mb-8">
              My closest dear one who completes every story of my life
            </p>
          </div>

          <div id="photos" className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl mb-12 transform hover:scale-105 transition-all duration-300">
            <div className="relative">
              <img
                src="/public/photo/frnd.jpg"
                alt="Soulmates together"
                className="w-full rounded-2xl shadow-lg mb-4"
              />
              <div className="absolute bottom-4 right-4 bg-pink-500 rounded-full p-2">
                <Camera className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-lg font-medium text-purple-700 italic">
              "When souls connect, distance becomes meaningless and time stands still 💫"
            </p>
            <p className="text-sm text-pink-600 mt-2">
              ~ A moment captured with my soulmate under the stars ✨
            </p>
          </div>

          <div id="moments" className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl mb-12">
            <Candy className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-pink-600 mb-4">Our Soul Connection</h2>
            <p className="text-purple-700 mb-6">
              They say when two souls are meant to connect, nothing can stop them. From our deepest conversations
              to comfortable silences, every moment feels like destiny. You understand my unspoken thoughts,
              share my dreams, and even in our silly arguments, our souls remain connected.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-pink-50 rounded-xl p-4">
                <h3 className="font-semibold text-pink-600">Soul Connection</h3>
                <p className="text-purple-700">Understanding beyond words ✨</p>
              </div>
              <div className="bg-pink-50 rounded-xl p-4">
                <h3 className="font-semibold text-pink-600">Destined Bond</h3>
                <p className="text-purple-700">Trust that transcends time</p>
              </div>
            </div>
          </div>

          <div id="story" className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&w=600"
                alt="Destiny connection"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h2 className="text-2xl font-semibold text-pink-600 mb-4">Our Connection</h2>
              <p className="text-purple-700">
                Dear Ajita, you're the missing piece to my puzzle. Our connection goes beyond ordinary friendship - it's written in the stars.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=600"
                alt="Eternal bond"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h2 className="text-2xl font-semibold text-pink-600 mb-4">My Promise</h2>
              <p className="text-purple-700">
                I promise to cherish our soul connection, to understand your silence, and to be your eternal confidant through every journey of life.
              </p>
            </div>
          </div>

          <div id="playlist" className="mt-16 bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <Music className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-pink-600 mb-4">Our Soul's Playlist</h2>
            <p className="text-purple-700 mb-6">
              Every melody reminds me of our deep connection and the beautiful moments we share.
            </p>
            <div className="space-y-4">
              <div className="bg-pink-50 rounded-xl p-4">
                <h3 className="font-semibold text-pink-600">Soul's Melody</h3>
                <p className="text-purple-700">A Thousand Years - Christina Perri</p>
              </div>
              <div className="bg-pink-50 rounded-xl p-4">
                <h3 className="font-semibold text-pink-600">Our Connection</h3>
                <p className="text-purple-700">Mirrors - Justin Timberlake</p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <button className="bg-pink-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
              ✨ Souls Connected Forever
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-purple-300/50 to-transparent" />
    </div>
  );
}

export default App;