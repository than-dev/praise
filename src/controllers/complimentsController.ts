import { Request, Response } from 'express';
import { CreateComplimentService } from '../services/CreateComplimentService';

class CreateComplimentsController {
	async handle(req: Request, res: Response) {
		const { tag_id, user_receiver, message } = req.body;
		const { user_id } = req;

		const createComplimentsService = new CreateComplimentService();

		const compliment = await createComplimentsService.createCompliment({
			tag_id,
			user_sender: user_id,
			user_receiver,
			message,
		});

		return res.json(compliment);
	}
}

export { CreateComplimentsController };
