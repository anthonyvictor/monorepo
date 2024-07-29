import { User } from '@monorepo/types';
import { Injectable } from '@nestjs/common';

// import { formatShortDate } from '@monorepo/util';
// Discomment line above to see error;

@Injectable()
export class AppService {
  getHello(): { user: User; formattedDate: string } {
    //Types package is working
    const user: User = { id: '1', name: 'John' };

    //Util package is NOT working
    // const formattedDate = formatShortDate(new Date());
    // Discomment line above, and comment line below to see error;
    const formattedDate = '';

    return {
      user,
      formattedDate,
    };
  }
}
