import { dataNavLinks } from './data/dataNavLinks';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req:NextApiRequest, res:NextApiResponse) => {
  console.log(req.method);
  if (req.method === 'GET') {
    res.status(200).json(dataNavLinks);
  };
}

export default handler