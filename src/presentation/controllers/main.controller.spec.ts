import { MainController } from './main.controller';

describe('MainController', () => {
  let mainController!: MainController;

  beforeEach(() => {
    mainController = new MainController();
  });

  describe('checkHello', () => {
    it('Deve retornar "Chat Orchestrator running...."', async () => {
      expect(await mainController.getHello()).toBe(
        'Chat Orchestrator running....',
      );
    });
  });
});
