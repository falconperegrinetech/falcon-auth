export const routes = (app) => {
	app.get("/", (_req, res) => {
		res.json("Falcon Auth Service");
	});
};
