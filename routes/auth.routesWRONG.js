// const { Router } = require('express')
// const bcrypt = require('bcryptjs')
// const config = require('config')
// const jwt = require('jsonwebtoken')
// const { check, validationResult } = require('express-validator')
// const User = require('../models/User')
// const router = Router()

// //  /api/auth/register
// router.post(
//   '/register',
//   // [
//   //   check('email', 'Invalid email.').isEmail(),
//   //   check('password', 'Password must contain at least 8 symbols.').isLength({
//   //     min: 8,
//   //   }),
//   // ],
//   async (req, res) => {
//     try {
//       console.log('Body: ', body)

//       const errors = validationResult(req)

//       if (!errors.isEmpty()) {
//         return res.status(400).json({
//           errors: errors.array(),
//           message: 'Invalid email or password.',
//         })
//       }

//       const { email, password } = req.body

//       const candidate = await User.findOne({ email })

//       if (candidate) {
//         return response.status(400).json({ message: 'Username is taken.' })
//       }

//       const hashedPassword = await bcrypt.hash(password, 12)
//       const user = new User({ email, password: hashedPassword })

//       await user.save()

//       res.status(201).json({ message: 'User has been created.' })
//     } catch (e) {
//       res
//         .status(500)
//         // .json({ message: 'Something gone wrong. Try again please.' })
//         .json({ message: e.message })
//     }
//   }
// )

// //  /api/auth/login
// router.post(
//   '/login',
//   [
//     check('email', 'Enter valid email.').normalizeEmail().isEmail(),
//     check('password', 'Enter password.').exists(),
//   ],
//   async (req, res) => {
//     try {
//       const errors = validationResult(req)

//       if (!errors.isEmpty()) {
//         return res.status(400).json({
//           errors: errors.array(),
//           message: 'Invalid email or password.',
//         })
//       }

//       const { email, password } = req.body

//       const user = await User.findOne({ email })

//       if (!user) {
//         return res.status(400).json({ message: 'User is not found.' })
//       }

//       const isMatch = await bcrypt.compare(password, user.password)

//       if (!isMatch) {
//         return res.status(400).json({ message: 'Incorrect password.' })
//       }

//       const token = jwt.sign({ userId: user.id }, config.get('jwtSecret'), {
//         expiresIn: '72h',
//       })
//       res.json({ token, userId })
//     } catch (e) {
//       res
//         .status(500)
//         .json({ message: 'Something gone wrong. Try again please.' })
//     }
//   }
// )

// module.exports = router
