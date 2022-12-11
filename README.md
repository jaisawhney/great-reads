# Great Reads

<p align="center">
<img alt="Banner" src="/../media/banner.jpg"/>
</p>
Great Reads is a one-stop shop for everything reading related:

- Save and track books you’ve read
- Share your books with your friends
- Leave your thoughts on books

---

Enjoy the current iteration of Great Reads [Here!](https://great-reads-demo.vercel.app/)

## Project Timeline

- September - CRUD resources/environment setup

- October - Release MVP with limited features and styling

- November - Add more features, tailor styling

- December - Project handoff

## Future Plans

- Book reviews
- Daily reading goals
- Fix mobile

---

## Getting Started

**After cloning the repo:**

### Install Dependencies:

```bash
npm install
```

Make sure you have MySQL installed and running on port 3306!

### Add Environment Variables:

##### In .env

- DATABASE_URL
- AUTH0_SECRET
- AUTH0_BASE_URL
- AUTH0_ISSUER_BASE_URL
- AUTH0_CLIENT_ID
- AUTH0_CLIENT_SECRET

### Migrate the database schema with:

```bash
npx prisma migrate dev
```

### Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Tools Used

- Next.js - [Documentation](https://nextjs.org)
- Tailwind CSS - [Documentation](https://tailwindcss.com)
- Auth0 - [Documentation](https://auth0.com)
- MySQL - [Documentation](https://dev.mysql.com)
- Prisma - [Documentation](https://www.prisma.io)
