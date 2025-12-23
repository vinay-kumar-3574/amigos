import { initializeApp } from 'firebase/app'
import { getFirestore, addDoc, collection, serverTimestamp } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBn1oCAx1L0OXvz6t7-PIlFNTVYRQ8c4YQ',
  authDomain: 'amigos-60353.firebaseapp.com',
  projectId: 'amigos-60353',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export const saveChatMessage = async ({ userId, sender, text }) => {
  try {
    await addDoc(collection(db, 'chats'), {
      userId: userId || 'anonymous',
      sender,
      text,
      createdAt: serverTimestamp(),
    })
  } catch (err) {
    // Avoid breaking UI if logging fails; just log to console
    console.error('Failed to save chat message:', err)
  }
}

export default db


