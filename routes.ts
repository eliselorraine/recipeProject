import express, { Express, Request, Response } from 'express'

import { app } from './server';
import { getUser, createUser } from './helpers';

app.post('/user/:id', async (req: Request, res: Response) => {
  try {
    const user = await getUser(req.params.id);
    res.send({ user })
  } catch (e) {
    res.status(400).send('Invalid email or password')
  }
})

app.post('/user/new', async (req: Request, res: Response) => {
  try {
    const newUser = await createUser(req.body);
    res.send({ newUser });
  } catch (e) {
    res.status(500).send('Failed to create user')
  }
})
